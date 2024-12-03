const blockContext = require.context('./blocks', true, /index\.js$/);

blockContext.keys().forEach((blockPath) => {
  try {
    blockContext(blockPath);
  } catch (error) {
    console.error(`Error loading block: ${blockPath}`, error);
  }
});

