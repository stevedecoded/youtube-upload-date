/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
    --pack-extension=bundle \
    --pack-extension-key=bundle.pem

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)

cd "$SCRIPT_DIR/bundle"
rm -f ../bin/package.zip
find . -name .DS_Store -delete
zip -r ../bin/package.zip .
