var plugins = ['Display', 'Controlbar', 'Settings', 'Tracking', 'Tracks', 'Waveform'];
if (primaryType.indexOf('audio')==-1) {
	plugins.push('Agf');	
}

var apiUrl = "./" + id + "-ppjson";



apiUrl += (image !="") ? "_image-" + image : "";
apiUrl += (start != "") ? "_start-" + start : "";
apiUrl += (stop != "") ? "_stop-" + stop : "";

		
apiUrl += '.json';		

var playlist = [            
		{
			1: {src: apiUrl, type:"text/json"}
		}
    ],
    configCommon = {	
	volume: 1,
	controls: true || isMobileClient(),
	cookiePath: '/projekktor/',
	iframe: true,
	plugins: plugins,
	preventAutoScaling: preventAutoScaling,
	platforms: ['browser', 'android', 'ios', 'native', 'flash', 'vlc'],			
	OSMFQualityMap: {
		'512x288': 's',
		'640x360': 'm',
		'960x544': 'l',
		'960x540': 'l',
		'1280x720': 'xl'
	},
	playbackQualities: [
		{
			key: "xs",
			minHeight: 0,
			minWidth: 100
		},	                    
		{
			key: "s",
			minHeight: 0,
			minWidth: 200
		},
		{
			key: "m",
			minHeight: 0,
			minWidth: 300
		},
		{
			key: "l",
			minHeight: 0,
			minWidth: 500
		},
		{
			key: "xl",
			minHeight: 0,
			minWidth: 900
		}   
	],
	playerFlashMP3: '/common/mediaplayer/swf/StrobeMediaPlayback/StrobeMediaPlayback.swf',
	playerFlashMP4: '/common/mediaplayer/swf/StrobeMediaPlayback/StrobeMediaPlayback.swf',
	plugin_tracking: {
		track: [
			{events: ["state.playing"], callback:function(c, v, player) {
					if (player.getConfig('primaryType').indexOf('live')>-1) {
						if (player.getConfig('primaryType').indexOf('audio')==-1) {
							player._StreamSense.notify(ns_.StreamSense.PlayerEvents.PLAY, {}, 0); 
							return;
						}
					}
					
					if (v.durms>0  && isFinite(v.durms)) {
						player._StreamSense.notify(ns_.StreamSense.PlayerEvents.PLAY, {}, v.posms); 
					}
				}
			},
			{events: ["state.paused"], callback:function(c, v, player) { 
					if (player.getConfig('primaryType').indexOf('live')>-1) {
						if (player.getConfig('primaryType').indexOf('audio')==-1) {
							player._StreamSense.notify(ns_.StreamSense.PlayerEvents.PAUSE, {}, 0); 
							return;
						}
					}
					
					if (v.durms>0 && isFinite(v.durms)) {
						player._StreamSense.notify(ns_.StreamSense.PlayerEvents.PAUSE, {}, v.posms); 
					}
				} 
			}, 
			{events: ["seek.seeking"], callback:function(c, v, player) { 
					if (player.getState('PLAYING')) { 
						if (player.getConfig('primaryType').indexOf('live')>-1) {
							if (player.getConfig('primaryType').indexOf('audio')==-1) {
								player._StreamSense.notify(ns_.StreamSense.PlayerEvents.PAUSE, {ns_st_ui: "seeking"},0);
								return;
							}
						}
						if (v.durms>0  && isFinite(v.durms)) {
							player._StreamSense.notify(ns_.StreamSense.PlayerEvents.PAUSE, {ns_st_ui: "seeking"}, player.lastPosition*1000); 
						}
					}
				}
			}, 
			{events: ["seek.seeked"], callback:function(c, v, player) {
					if (player.getState('PLAYING')) { 
						if (player.getConfig('primaryType').indexOf('live')>-1) {
							if (player.getConfig('primaryType').indexOf('audio')==-1) {
								player._StreamSense.notify(ns_.StreamSense.PlayerEvents.PLAY, {ns_st_ui: "seeked"},0);
								return;
							}
						}
						if (v.durms>0  && isFinite(v.durms)) {
							player._StreamSense.notify(ns_.StreamSense.PlayerEvents.PLAY, {ns_st_ui: "seeked"}, v.posms);
						}
					}
				}
			},
			{events: ["done"], callback:function(c, v, player) {
					if (player.getConfig('primaryType').indexOf('live')>-1) {
						if (player.getConfig('primaryType').indexOf('audio')==-1) {
							player._StreamSense.notify(ns_.StreamSense.PlayerEvents.END, {}, 0);
							return;
						}
					}
					if (v.durms>0  && isFinite(v.durms)) {
						player._StreamSense.notify(ns_.StreamSense.PlayerEvents.END, {}, v.posms);
					}							
				} 
			}
		]
	},
	plugin_controlbar: {
		showOnStart: true,
		showOnIdle: true,
		showCuePoints: false,
		fadeDelay: 2500,
		disableFade: false,
		absoluteEndTime: (stop!="") ? stop : false
	},
	plugin_agf: {
		apiUrl: "./" + id +"-agf.json"
	},
	plugin_tracks: {
		ttstyle : true
	},	
	plugin_settings: {
		feedbackUrl: '/service/Kontakt-zur-Online-Redaktion,kontaktonline101.html'
	},	
    plugin_display: {
        staticControls: false,
    	spriteUrl: '', // './common/mediaplayer/theme/' + theme + '/img/mediathek_loader.png"/>',
        spriteWidth: 31,
        spriteHeight: 31,
        spriteTiles: 8,
        spriteOffset: 0
    },  	
};