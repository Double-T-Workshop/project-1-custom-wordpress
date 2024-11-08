<?php
// Enqueue React App Scripts and Styles
function enqueue_react_app() {
    // Example JavaScript file from React build
    wp_enqueue_script(
        'react-app',
        get_template_directory_uri() . '/static/js/main.js', // Adjust path as needed
        array(), // Dependencies (you can add 'react', 'wp-element' if needed)
        filemtime(get_template_directory() . '/static/js/main.js'), // Versioning
        true // Load in footer
    );

    // Example CSS file from React build
    wp_enqueue_style(
        'react-app-styles',
        get_template_directory_uri() . '/static/css/main.css', // Adjust path as needed
        array(),
        filemtime(get_template_directory() . '/static/css/main.css')
    );
}
add_action('wp_enqueue_scripts', 'enqueue_react_app');
