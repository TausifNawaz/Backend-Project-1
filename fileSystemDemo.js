// Import the built-in 'fs' module
const fs = require('fs');

// File path
const filePath = './example.txt';

// --- CREATE / WRITE FILE ---
fs.writeFile(filePath, 'Hello, this is the first line!\n', (err) => {
  if (err) {
    console.error('Error creating file:', err);
    return;
  }
  console.log('✅ File created and initial content written.');

  // --- READ FILE ---
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('\n📖 File content after creation:\n', data);

    // --- UPDATE FILE (Append new content) ---
    fs.appendFile(filePath, 'This is an appended line.\n', (err) => {
      if (err) {
        console.error('Error updating file:', err);
        return;
      }
      console.log('✅ File updated successfully.');

      // --- READ FILE AGAIN TO VERIFY UPDATE ---
      fs.readFile(filePath, 'utf8', (err, updatedData) => {
        if (err) {
          console.error('Error reading updated file:', err);
          return;
        }
        console.log('\n📖 File content after update:\n', updatedData);
      });
    });
  });
});
