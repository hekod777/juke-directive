'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('albums', {
    url: '/albums',
    template: "<album-list albums='albums' ></album-list>",
    //templateUrl: '/js/album/templates/albums.html',
    controller: 'AlbumsCtrl',
    resolve: {
      allAlbums: function (AlbumFactory) {
        return AlbumFactory.fetchAll();
      }
    }
  });

  $stateProvider.state('album', {
    url: '/albums/:albumId',
    //template: "<song-list songs='album.songs'></song-list>",
    templateUrl: '/js/album/templates/album.html',
    controller: 'AlbumCtrl',
    resolve: {
      theAlbum: function (AlbumFactory, $stateParams) {
        return AlbumFactory.fetchById($stateParams.albumId);
      }
    }
  });

});
