<?php
/*
Plugin Name: Custom Blocks
Description: A set of custom Gutenberg blocks built with React.
Version: 1.0
Author: By Double-T-Workshop
*/

// Prevent direct access to the file
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Function to register all custom blocks.
 */
// Register the custom block script and style
    function register_custom_blocks() {
        $blocks = ['news-slider', 'block-two', 'block-three'];
        foreach ($blocks as $block) {
            register_block_type(__DIR__ . "/src/blocks/$block");
        }
    }
    add_action('init', 'register_custom_blocks');

    function custom_blocks_enqueue() {
        wp_enqueue_script(
            'custom-blocks',
            plugin_dir_url(__FILE__) . 'build/index.js',
            array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components'),
            filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
        );
      }
      
      add_action( 'enqueue_block_editor_assets', 'custom_blocks_enqueue' );
