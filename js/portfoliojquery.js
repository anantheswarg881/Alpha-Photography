function reloadGallery() {
    var $methods = $('#lightGallery');
    $methods.data('lightGallery').destroy(true);
    $methods.lightGallery();
};