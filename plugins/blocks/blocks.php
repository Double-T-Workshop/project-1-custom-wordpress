<?php
/*
Plugin Name: Custom Blocks
Description: A set of custom Gutenberg blocks built with/without React.
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
        // Define the path where your block folders are stored
    $blocks_directory = __DIR__ . '/src/custom-blocks/';
    
    // Use glob to get all directories within that path
    $block_folders = glob($blocks_directory . '*', GLOB_ONLYDIR);
    
    foreach ($block_folders as $block_folder) {
        // Extract block name from folder name (e.g., 'media-and-text-above' from '/src/custom-blocks/media-and-text-above')
        $block = basename($block_folder);
        
        // Register the block type
        register_block_type($block_folder, array(
            'style' => "custom-block-style-$block",
        ));

        // Enqueue block-specific CSS
        wp_register_style(
            "custom-block-style-$block",
            plugins_url("src/custom-blocks/$block/style.css", __FILE__),
            array(),
            filemtime(plugin_dir_path(__FILE__) . "src/custom-blocks/$block/style.css")
        );

    }
    }
    add_action('init', 'register_custom_blocks');

    function custom_blocks_enqueue() {
        wp_enqueue_script(
            'custom-blocks',
            plugin_dir_url(__FILE__) . 'build/index.js',
            array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-data'),
            filemtime(plugin_dir_path(__FILE__) . 'build/index.js'),
            true
        );
    }
      
    add_action( 'enqueue_block_editor_assets', 'custom_blocks_enqueue' );
     
    function enqueue_combined_word_list_script() {
        $script_path = plugin_dir_path(__FILE__) . 'src/blocks/word-list/index.js';
    
        // Ensure the script exists
        if (!file_exists($script_path)) {
            error_log("Error: Combined script file not found at $script_path");
            return;
        }
    
        wp_enqueue_script(
            'word-list-combined',
            plugin_dir_url(__FILE__) . 'src/blocks/word-list/index.js',
            array('wp-element', 'wp-blocks', 'wp-editor'),
            filemtime($script_path),
            true
        );
    
        // Enqueue the CSS for both editor and frontend
        $style_path = plugin_dir_path(__FILE__) . 'src/blocks/word-list/style.css';
        if (file_exists($style_path)) {
            wp_enqueue_style(
                'word-list-style',
                plugin_dir_url(__FILE__) . 'src/blocks/word-list/style.css',
                array(),
                filemtime($style_path)
            );
        }
    }
    add_action('enqueue_block_assets', 'enqueue_combined_word_list_script');
    