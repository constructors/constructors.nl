#!/usr/bin/env bash
# Generates thumbnails of blog images with ImageMagick.

MAX_HEADER_WIDTH=535
BASEDIR="`dirname \"$0\"`/.."

for image in "$BASEDIR"/img/blog/*.jpg; do
    image_filename=$(basename "$image")
    echo "$image_filename"
    convert "$image" -thumbnail $MAX_HEADER_WIDTH "$BASEDIR/img/blog/thumb/$image_filename"
done
