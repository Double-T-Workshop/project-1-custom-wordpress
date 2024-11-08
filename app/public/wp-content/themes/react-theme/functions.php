<?php
function enqueue_react_app() {
    // Locate the main JavaScript file
    $js_files = glob(get_template_directory() . '/static/js/main.*.js');
    if ($js_files) {
        wp_enqueue_script(
            'react-app',
            get_template_directory_uri() . '/static/js/' . basename($js_files[0]),
            array(),
            filemtime($js_files[0]),
            true
        );
    }

    // Locate the main CSS file
    $css_files = glob(get_template_directory() . '/static/css/main.*.css');
    if ($css_files) {
        wp_enqueue_style(
            'react-app-styles',
            get_template_directory_uri() . '/static/css/' . basename($css_files[0]),
            array(),
            filemtime($css_files[0])
        );
    }
}
add_action('wp_enqueue_scripts', 'enqueue_react_app');
