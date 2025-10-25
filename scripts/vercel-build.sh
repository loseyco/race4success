#!/bin/bash

# Vercel Build Script for Race4Success
echo "🏁 Building Race4Success for Vercel..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build CSS
echo "🎨 Building CSS..."
npm run build:css

# Build JavaScript
echo "⚡ Building JavaScript..."
npm run build:js

# Copy HTML to public directory
echo "📄 Copying HTML files..."
npm run build:html

# Create public directory structure if it doesn't exist
mkdir -p public/css public/js public/images

echo "✅ Build complete!"
echo "🚀 Ready for Vercel deployment!"
