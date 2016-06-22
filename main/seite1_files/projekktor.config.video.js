var ppsetup = function(sophoraId, configOptions) {
    var configVideo = {
		ratio: 16/9,
		width: "100%"		
    };

    projekktor('.projekktor', $.extend(true, configCommon, configVideo, configOptions, {playlist:playlist}), function(player) {
		commonOnReady(player);	
    });
 
}; 