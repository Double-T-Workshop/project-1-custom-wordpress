<?php
/*
Plugin Name: Custom Template Block
Description: A custom Gutenberg block built using React.
Version: 1.0
*/

function custom_template_block_register() {
    wp_register_script(
        'template-block-js',
        plugins_url( '/block/build/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-editor' )
    );

    register_block_type( 'custom/block', array(
        'editor_script' => 'template-block-js',
    ) );
}
add_action( 'init', 'custom_template_block_register' );
