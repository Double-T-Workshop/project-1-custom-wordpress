<?php
function my_react_theme_scripts() {
    wp_enqueue_script('my-react-theme-app', get_template_directory_uri() . '/build/index.js', array('wp-element'), '1.0.0', true);
    wp_enqueue_style('my-react-theme-style', get_stylesheet_uri());
}

add_action('wp_enqueue_scripts', 'my_react_theme_scripts');

function my_theme_register_blocks() {

wp_register_script(
    'my-custom-block-script', // Script handle
    get_template_directory_uri() . '/blocks/Twocol.js', // Path to the JS file within the theme
    array( 'wp-blocks', 'wp-element', 'wp-editor' ), // Dependencies
    filemtime( get_template_directory() . '/blocks/Twocol.js' ) // Version for cache-busting
);
    register_block_type('react-theme/twocol-block', array(
        'editor_script' => 'my-custom-block-script',
    ));
}
add_action('init', 'my_theme_register_blocks');
