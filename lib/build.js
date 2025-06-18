const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting build process...');

// Clean dist directory
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true });
}

// Create .babelignore file to exclude test files
const babelIgnoreContent = `**/*.test.js
**/*.spec.js
**/__tests__/**
**/*.test.esm.js
**/*.spec.esm.js`;

fs.writeFileSync('.babelignore', babelIgnoreContent);

try {
  // Build CommonJS version
  console.log('📦 Building CommonJS version...');
  execSync('babel src -d dist --copy-files --env-name cjs', { stdio: 'inherit' });

  // Build ES6 version
  console.log('📦 Building ES6 version...');
  execSync('babel src -d dist-esm --copy-files --env-name esm', { stdio: 'inherit' });

  // Copy ES6 files to dist with .esm.js extension
  const esmFiles = fs.readdirSync('dist-esm', { recursive: true });
  esmFiles.forEach(file => {
    if (file.endsWith('.js')) {
      const sourcePath = path.join('dist-esm', file);
      const targetPath = path.join('dist', file.replace('.js', '.esm.js'));
      
      // Ensure target directory exists
      const targetDir = path.dirname(targetPath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      
      fs.copyFileSync(sourcePath, targetPath);
    }
  });

  // Clean up temporary dist-esm directory
  fs.rmSync('dist-esm', { recursive: true });

  // Remove test files from dist directory
  console.log('🧹 Cleaning up test files from distribution...');
  const removeTestFiles = (dir) => {
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          removeTestFiles(filePath);
        } else if (file.includes('.test.') || file.includes('.spec.')) {
          fs.unlinkSync(filePath);
          console.log(`   Removed: ${filePath}`);
        }
      });
    }
  };
  
  removeTestFiles('dist');

  console.log('✅ Build completed successfully!');
  console.log('📁 Output files:');
  console.log('   - dist/index.js (CommonJS)');
  console.log('   - dist/index.esm.js (ES6 modules)');
  console.log('📝 Note: Test files (*.test.js, *.spec.js) have been excluded from the build');
} finally {
  // Clean up .babelignore file
  if (fs.existsSync('.babelignore')) {
    fs.unlinkSync('.babelignore');
  }
} 
