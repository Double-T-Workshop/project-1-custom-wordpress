// src/index.js
// Dynamically import all block modules from a specific folder
const blockContext = require.context("./custom-blocks", true, /index\.js$/);

// Loop through and import each block dynamically
blockContext.keys().forEach((block) => {
  blockContext(block); // This will execute the block module
});
