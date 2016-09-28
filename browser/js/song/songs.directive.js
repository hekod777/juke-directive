juke.directive('songList',function(PlayerFactory){
	return {
		scope:{
			songs: "="
		},
		templateUrl: "./js/song/songList.html",
		link: function(scope){
			scope.toggle = function (song) {
			    if (song !== PlayerFactory.getCurrentSong()) {
			      PlayerFactory.start(song, scope.songs);
			    } else if ( PlayerFactory.isPlaying() ) {
			      PlayerFactory.pause();
			    } else {
			      PlayerFactory.resume();
			    }
			  };

			scope.getCurrentSong = function () {
				return PlayerFactory.getCurrentSong();
			};

			scope.isPlaying = function (song) {
				return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
			};
		}
	}
})

juke.directive('doubleClick', function(PlayerFactory){
	return{
		scope:{
			doubleClick: "&"
		},
		link: function(scope, element){
			scope.toggle = function (song) {
				console.log("ran toggle");
			    if (song !== PlayerFactory.getCurrentSong()) {
			      PlayerFactory.start(song, scope.songs);
			    } else if ( PlayerFactory.isPlaying() ) {
			      PlayerFactory.pause();
			    } else {
			      PlayerFactory.resume();
			    }
			};
			element.on('dblclick', function(song) {
				console.log("got double clicked");
				scope.toggle(song);
			});
		},
	}
})