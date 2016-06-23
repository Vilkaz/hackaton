
function toogleNewscraftItems() {
    var newsCraftItems =  jQuery('#newsCraftItems');
    if (newsCraftItems.hasClass('hide')){
        newsCraftItems.removeClass('hide')
    } else {
        hideTextEditor()
    }
}

function toogleWriteComment() {
    hideAudiocontrolls();
    hideVideoControlls();
    var newsCraftItems =  jQuery('#writeTextarea');
    if (newsCraftItems.hasClass('hide')){
        newsCraftItems.removeClass('hide')
    } else {
        newsCraftItems.addClass('hide');
    }
}
function toogleUploadMP3() {
    hideTextEditor();
    hideVideoControlls();
    var audioControlls =  jQuery('#ncuploadmp3');
    if (audioControlls.hasClass('hide')){
        audioControlls.removeClass('hide')
    } else {
        hideAudiocontrolls();
    }
}
function toogleUploadVideo() {
    hideTextEditor();
    hideAudiocontrolls();
    var videoControlls =  jQuery('#ncVideoUpload');
    if (videoControlls.hasClass('hide')){
        videoControlls.removeClass('hide')
    } else {
        hideVideoControlls();
    }
}

function hideTextEditor(){
     jQuery('#writeTextarea').addClass('hide');
}

function hideAudiocontrolls(){
     jQuery('#ncuploadmp3').addClass('hide');
}

function hideVideoControlls(){
     jQuery('#ncVideoUpload').addClass('hide');
}

