$(document).ready(function () {
    $('label.tree-toggler').click(function () {
        var $el = $(this); //references the toggler label element
        
        $el.parent().children('ul.tree').toggle(300); //show and hide children
        
        $el.children('i').toggleClass('glyphicon glyphicon-menu-down');  //switch icons
        $el.children('i').toggleClass('icon-minus-sign');
    });
});