/* global $ */
var sTime = $.now()
;
$(document).ready(function () {
    var o = $('#output')
    ;
    o.text('static/js/index.js: page readied in '+($.now()-sTime)+'ms.');
});