<?php
/*
Plugin Name: Custom CSS Block with WordPress Style
Description: A custom block that allows users to modify CSS properties.
Version: 1.0
Author: Double-T-Workshop
*/

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

function custom_block_with_inputs_register_block() {
  register_block_type( __DIR__ . '/block.json' );
}
add_action( 'init', 'custom_block_with_inputs_register_block' );

function custom_css_block_with_wordpress_style_enqueue() {
  wp_enqueue_script(
      'custom-css-block-with-wordpress-style',
      plugin_dir_url(__FILE__) . 'build/index.js',
      array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components'),
      filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
  );
}

add_action( 'enqueue_block_editor_assets', 'custom_css_block_with_wordpress_style_enqueue' );

