#!/usr/bin/env bash
# Clean and optimize school video assets using ffmpeg.
# Usage: bash scripts/clean-videos.sh [input_dir] [output_dir]

set -euo pipefail

INPUT_DIR="${1:-public/school-assets/videos}"
OUTPUT_DIR="${2:-public/school-assets/videos-clean}"

mkdir -p "$OUTPUT_DIR"

echo "Cleaning videos from $INPUT_DIR to $OUTPUT_DIR..."

for video in "$INPUT_DIR"/*.mp4; do
  [ -e "$video" ] || continue
  filename=$(basename "$video")
  out="$OUTPUT_DIR/$filename"

  echo "Processing $filename..."
  
  # Strip metadata, re-encode video to H.264 / AAC, max 1280px width, faststart for fast web streaming
  ffmpeg -y -i "$video" \
    -map_metadata -1 \
    -c:v libx264 -crf 23 -preset medium -pix_fmt yuv420p \
    -vf "scale='min(1280,iw)':-2" \
    -c:a aac -b:a 128k \
    -movflags +faststart \
    "$out"

  echo "Finished $filename -> $out"
done

echo "Video cleaning completed."

