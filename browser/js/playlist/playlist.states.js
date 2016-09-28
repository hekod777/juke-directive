'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('newPlaylist', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/templates/playlist-form.html',
    controller: 'PlaylistFormCtrl'
  });

  $stateProvider.state('playlist', {
    url: '/playlists/:playlistId',
    // template: "<song-list songs='playlist.songs'></song-list>",
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlaylistCtrl',
    resolve: {
      thePlaylist: function (PlaylistFactory, $stateParams) {
        return PlaylistFactory.fetchById($stateParams.playlistId);
      }
    }
  });

});
