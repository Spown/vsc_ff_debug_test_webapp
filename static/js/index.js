/* global $, ymaps */
var sTime = $.now()
;
$(document).ready(function () {
    var o = $('#output'), //breakpoint here, step over forward
        n = $.now()-sTime
    ;
    o.text('static/js/index.js: page readied in '+n+'ms.');

    (typeof ymaps !== 'undefined') && ymaps.ready(function () {
        var __map = new ymaps.Map('main_map', {
            zoom: 3,
            behaviors: ['default', 'scrollZoom']
        });
    })
});