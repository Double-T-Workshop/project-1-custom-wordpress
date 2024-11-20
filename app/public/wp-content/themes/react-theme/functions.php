<?php
function my_react_theme_scripts() {
    wp_enqueue_script('my-react-theme-app', get_template_directory_uri() . '/build/index.js', array('wp-element'), '1.0.0', true);
    wp_enqueue_style('my-react-theme-style', get_stylesheet_uri());
}

add_action('wp_enqueue_scripts', 'my_react_theme_scripts');



function my_react_theme_register_nav_menu() {
    register_nav_menu('primary', __('Primary Menu'));
}
add_action('after_setup_theme', 'my_react_theme_register_nav_menu');


add_filter('register_nav_menu_item', function($location, $args) {
    register_nav_menu($location, $args);
    return $location;
}, 10, 2);