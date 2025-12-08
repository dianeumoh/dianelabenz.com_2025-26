#! /bin/bash

# Build the vite website
npm run build

# Copy the asses into the build directory
cp -r src dist

# Deploy the website to Firebase
firebase deploy --only hosting