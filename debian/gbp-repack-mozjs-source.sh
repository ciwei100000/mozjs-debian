#!/bin/bash
# This script is meant to be called by gbp import-orig as postunpack cmd, and
# it uses official mozilla tooling to create the mozjs archive from a firefox
# source tarball, including only the needed files without having us to care
# about doing this filtering.
#
# We depend on bash here, because the script we call depends on it anyways.
set -xe

[ -d "$GBP_TMP_DIR" ] || exit 1

export STAGING="$GBP_TMP_DIR"
export DIST=/dev/null
export MOZJS_NAME="mozjs-repack"

export RSYNC=${RSYNC:-rsync}
# Don't reconfigure the source or create another archive
export AUTOCONF=/bin/true
export TAR=/bin/true

EXTRA_FILES=(
    Cargo.toml
    intl/icu
    intl/icu-patches
    intl/icu_sources_data.py
)

srcpath=$(find "$GBP_TMP_DIR/" -mindepth 1 -maxdepth 1 -type d)
"$srcpath"/js/src/make-source-package.sh

mozjspath="$(find "$STAGING" -mindepth 1 -maxdepth 1 -type d -name "$MOZJS_NAME"'-*')"

# Remove added files, could be kept if gbp would recreate the orig after us
set +x
shopt -s globstar
for f in "$mozjspath"/**; do
    f="${f#"$mozjspath/"}"
    if [ ! -e "$srcpath/$f" ]; then
        rm "$mozjspath/$f" && echo "Removing generated $mozjspath/$f"
    fi
done

for ((i = 0; i < ${#EXTRA_FILES[@]}; i++)); do
    $RSYNC -a -q "$srcpath/${EXTRA_FILES[$i]}" "$mozjspath/$(dirname "${EXTRA_FILES[$i]}")/"
done

tmpout=$(mktemp /tmp/mozjs-debimport-XXXXXXXXX.diff)
echo "Differencies found with orig saved at $tmpout, consider filtering them"
diff -rq "$srcpath" "$mozjspath" > "$tmpout" || true

rm -rf "$srcpath"
mv -v "$mozjspath" "$srcpath"
