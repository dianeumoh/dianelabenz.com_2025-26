#! /bin/bash

# Invoke by typing either:
#   bash deploy.sh
# or
#   ./deploy.sh

# Build the vite website
npm run build

# Copy the asses into the build directory
cp -r src dist

# Deploy the website to Firebase
firebase deploy --only hosting