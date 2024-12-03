<?php

function enqueue_custom_css() {

    wp_enqueue_style(
        'style.css', 
        trailingslashit(get_stylesheet_directory_uri()) . 'style.css',
        array(),
        '1.0.0'
    );

    if (is_plugin_active('betterdocs/betterdocs.php')) {
        // Directory containing the CSS files
        $css_folder = WP_PLUGIN_DIR . '/betterdocs/assets/admin/css/';
        $css_url = plugins_url('assets/admin/css/', 'betterdocs/betterdocs.php');
        
        // Check if the directory exists
        if (is_dir($css_folder)) {
            // Get all CSS files in the folder
            $css_files = glob($css_folder . '*.css'); // Fetch all .css files
            
            foreach ($css_files as $file) {
                $filename = basename($file); // Extract the file name
                
                // Enqueue each CSS file with its unique handle and version
                wp_enqueue_style(
                    'betterdocs-' . sanitize_title($filename),
                    $css_url . $filename,
                    [],
                    filemtime($file) // Use the file's modification time for versioning
                );
            }
        }

        $public_faq_file = WP_PLUGIN_DIR . '/betterdocs/assets/public/css/faq.css'; // Adjust path if necessary
        $public_faq_url = plugins_url('assets/public/css/faq.css', 'betterdocs/betterdocs.php');

        wp_enqueue_style(
            'betterdocs-public-faq-css',
            $public_faq_url,
            array(),
            '1.0.0'
        );
    }

    if (is_plugin_active('heroic-glossary/ht-glossary.php')) {
        $css_folder = WP_PLUGIN_DIR . '/heroic-glossary/dist/';
        $css_url = plugins_url('dist/', 'heroic-glossary/ht-glossary.php');

        if (is_dir($css_folder)) {
            // Get all CSS files in the folder
            $css_files = glob($css_folder . '*.css'); // Fetch all .css files
            
            foreach ($css_files as $file) {
                $filename = basename($file); // Extract the file name
                
                // Enqueue each CSS file with its unique handle and version
                wp_enqueue_style(
                    'heroic-glossary-' . sanitize_title($filename),
                    $css_url . $filename,
                    [],
                    filemtime($file) // Use the file's modification time for versioning
                );
            }
        }
    }

}
add_action('wp_enqueue_scripts', 'enqueue_custom_css');


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

function enqueue_heroic_glossary_js() {
    // Define the path to the specific JS file
    $js_folder = WP_PLUGIN_DIR . '/heroic-glossary/dist/'; // Adjust path if necessary
    $js_url = plugins_url('dist/', 'heroic-glossary/ht-glossary.php');
    
    // Check if the file exists
    if (is_dir($css_folder)) {
        // Get all CSS files in the folder
        $js_files = glob($js_folder . '*.js'); // Fetch all .css files
            
        foreach ($js_files as $file) {
            $filename = basename($file); // Extract the file name
                
            // Enqueue each CSS file with its unique handle and version
            wp_enqueue_script(
                'heroic-glossary-' . sanitize_title($filename),
                $js_url . $filename,
                ['jquery'], // Dependencies (if any)
                filemtime($js_file), // Version based on file modification time
                true
            );
        }
    }
}