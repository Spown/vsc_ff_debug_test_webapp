/* global $ */
var sTime = $.now()
;
$(document).ready(function () {
    var o = $('#output'), //breakpoint here, step over forward
        n = $.now()-sTime
    ;
    o.text('static/js/index.js: page readied in '+n+'ms.');
});