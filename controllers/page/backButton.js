var properties = arguments[0];

$.button.left = properties.properties.left || 0;
$.button.backgroundImage = properties.properties.backgroundImage || '/images/button/back.png';
$.button.title = properties.properties.title || L('back');
$.button.addEventListener('click', function(e) {
    properties.pageflow.back();
});