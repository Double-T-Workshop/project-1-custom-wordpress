<?php
function my_react_theme_scripts() {
    wp_enqueue_script('my-react-theme-app', get_template_directory_uri() . '/build/index.js', array('wp-element'), '1.0.0', true);
    wp_enqueue_style('my-react-theme-style', get_stylesheet_uri());
}

add_action('wp_enqueue_scripts', 'my_react_theme_scripts');

function enqueue_swiper_assets() {
    // Enqueue Swiper JS
    wp_enqueue_script(
        'swiper-js',
        'https://unpkg.com/swiper/swiper-bundle.min.js', // Swiper CDN JS
        array(),
        null,
        true
    );

    // Enqueue Swiper CSS
    wp_enqueue_style(
        'swiper-css',
        'https://unpkg.com/swiper/swiper-bundle.min.css', // Swiper CDN CSS
        array(),
        null
    );

    // Enqueue custom Swiper initialization script
    wp_enqueue_script(
        'swiper-init',
        get_template_directory_uri() . '/swiper-init.js', 
        array('swiper-js'), 
        filemtime(get_template_directory() . '/swiper-init.js'), 
        true 
    );
}
add_action('wp_enqueue_scripts', 'enqueue_swiper_assets');
