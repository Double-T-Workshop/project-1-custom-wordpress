<?php
/*
Plugin Name: Custom CSS Block
Description: A custom block that allows users to modify CSS properties.
Version: 1.0
Author: By Double-T-Workshop
*/

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

function custom_css_block_enqueue() {
    wp_enqueue_script(
        'custom-css-block',
        plugin_dir_url(__FILE__) . 'build/index.js',
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components'),
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );

    wp_enqueue_style(
        'custom-css-block-style',
        plugin_dir_url(__FILE__) . 'src/style.css'
    );
}

add_action('enqueue_block_editor_assets', 'custom_css_block_enqueue');
