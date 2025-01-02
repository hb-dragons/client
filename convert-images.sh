#!/bin/bash

# Check if required tools are installed
if ! command -v convert &> /dev/null || ! command -v cwebp &> /dev/null; then
    echo "This script requires 'convert' from ImageMagick and 'cwebp'. Please install them first."
    exit 1
fi

# Check if the folder argument is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <input_folder>"
    exit 1
fi

# Set input folder and output directory
INPUT_FOLDER="$1"
OUTPUT_DIR="compressed_images"

# Set the quality level and max dimension
QUALITY=85
MAX_DIMENSION=1920

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Process all image files in the input folder
for IMAGE in "$INPUT_FOLDER"/*.{jpg,jpeg,png,gif,tiff}; do
    if [[ -f "$IMAGE" ]]; then
        # Extract filename without extension
        BASENAME=$(basename "$IMAGE")
        FILENAME="${BASENAME%.*}"

        # Temporary resized image
        TEMP_IMAGE="/tmp/${FILENAME}_resized.jpg"

        echo "Processing $IMAGE..."

        # Resize image to max dimension while maintaining aspect ratio
        magick "$IMAGE" -resize "${MAX_DIMENSION}x${MAX_DIMENSION}" "$TEMP_IMAGE"

        # Compress resized image with cwebp
        cwebp -q $QUALITY "$TEMP_IMAGE" -o "$OUTPUT_DIR/${FILENAME}.webp"

        # Remove temporary file
        rm "$TEMP_IMAGE"

        echo "Compressed and resized image saved to $OUTPUT_DIR/${FILENAME}.webp"
    else
        echo "Skipping $IMAGE: File does not exist or is not a regular file."
    fi
done

echo "All images processed. Compressed files are in the '$OUTPUT_DIR' directory."