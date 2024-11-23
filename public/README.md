## Custom WordPress

##### Overview

This project is a personal side project built using Next.js for the frontend integrating with wordpress

#### Block Creation
- Set Up a Local WordPress Development Environment
- Install Node.js and npm
- Create a WordPress Plugin for the Custom Block
-- You’ll create a new WordPress plugin to hold your custom Gutenberg block. Create a new folder inside the wp-content/plugins/ directory. Inside this folder, create a DirectoryName.php file with the following code:
```sh
<?php
/*
Plugin Name: Custom Gutenberg Block
Description: A custom Gutenberg block built using React.
Version: 1.0
*/

function custom_gutenberg_block_register() {
    wp_register_script(
        'DirectoryName-js',
        plugins_url( '/block/build/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor' )
    );

    register_block_type( 'custom/block', array(
        'editor_script' => 'DirectoryName-js',
    ) );
}
add_action( 'init', 'custom_gutenberg_block_register' );

```
- Set Up the Block Development Environment
-- Inside the your folder, create a block directory for the block files. Now, initialize npm and install the necessary packages:
```sh
cd wp-content/plugins/Your Folder/block
npm init -y
npm install --save @wordpress/blocks @wordpress/editor @wordpress/element @wordpress/components
```
-- Then, create the following folder structure:
```sh
Your Folder/
└── block/
    └── src/
        └── index.js
    └── build/
```
- Create the Block in src/index.js
-- In src/index.js, you can now write the React code for your Gutenberg block. Here’s an example of a simple block that allows users to input text:
```sh
const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;

registerBlockType('custom/block', {
    title: 'Custom Block',
    icon: 'smiley',
    category: 'common',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p'
        }
    },
    edit({ attributes, setAttributes }) {
        const onChangeContent = (newContent) => {
            setAttributes({ content: newContent });
        };

        return (
            <RichText
                tagName="p"
                onChange={onChangeContent}
                value={attributes.content}
            />
        );
    },
    save({ attributes }) {
        return <RichText.Content tagName="p" value={attributes.content} />;
    }
});
```
- Compile the Block
-- Now, you'll need to compile your block with a tool like Babel or Webpack. To keep things simple, you can use Babel. Create a .babelrc file in the block folder:

```sh
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
-- Then, install Babel:
```sh
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
```
-- Next, set up Webpack to bundle your block. Create a webpack.config.js file:
```sh
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
```
-- Run the following command to build the block:
```sh
npx webpack --mode development
```
-- npx webpack --mode development

- Activate the Plugin
-- Go to your WordPress admin, navigate to Plugins, and activate the "Custom Gutenberg Block" plugin. Now, you can add your custom block in the Gutenberg editor.
