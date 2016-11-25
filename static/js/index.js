/* global $ */
var sTime = $.now()
;
$(document).ready(function () {
    var o = $('#output'),
        n = $.now()-sTime
    ;
    o.text('static/js/index.js: page readied in '+n+'ms.');
});