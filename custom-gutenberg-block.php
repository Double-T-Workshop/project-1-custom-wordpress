<?php
/*
Plugin Name: Custom Gutenberg Block
Description: A custom Gutenberg block built using React.
Version: 1.0
*/

function custom_gutenberg_block_register() {
    wp_register_script(
        'custom-gutenberg-block-js',
        plugins_url( '/block/build/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor' )
    );

    register_block_type( 'custom/block', array(
        'editor_script' => 'custom-gutenberg-block-js',
    ) );
}
add_action( 'init', 'custom_gutenberg_block_register' );

/* This code registers the block and loads the custom JavaScript file. */