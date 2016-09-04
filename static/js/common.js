var commonData = {};
$(function() {
    commonData.a = 1;
    $.noop(); // set a breakpoint here
}); //the second page reload will break here instead of ^there