
function toogleNewscraftItems() {
    var newsCraftItems =  jQuery('#newsCraftItems');
    if (newsCraftItems.hasClass('hide')){
        newsCraftItems.removeClass('hide')
    } else {
        newsCraftItems.addClass('hide');
    }
}