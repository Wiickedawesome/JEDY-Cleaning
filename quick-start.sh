#!/bin/bash

# JEDY Cleaning Website - Quick Start Script
# Run this to set up everything from scratch

echo "🧹 JEDY Cleaning Website - Quick Setup"
echo "======================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 20 or higher."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed"
echo ""

# Run type check
echo "🔍 Running TypeScript type check..."
npm run type-check

echo ""
echo "✅ Setup complete!"
echo ""
echo "🚀 Next steps:"
echo "   1. Start dev server: npm run dev"
echo "   2. Open browser: http://localhost:3000"
echo ""
echo "📝 Available commands:"
echo "   npm run dev          - Start development server"
echo "   npm run build        - Build for production"
echo "   npm run lint         - Check code quality"
echo "   npm run format       - Format code"
echo "   npm run test         - Run tests"
echo ""
