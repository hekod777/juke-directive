'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('artists', {
    url: '/artists',
    
    templateUrl: '/js/artist/templates/artists.html',
    controller: 'ArtistsCtrl',
    resolve: {
      allArtists: function (ArtistFactory) {
        return ArtistFactory.fetchAll();
      }
    }
  });

  $stateProvider.state('artist', {
    url: '/artist/:artistId',
    templateUrl: '/js/artist/templates/artist.html',
    controller: 'ArtistCtrl',
    resolve: {
      theArtist: function (ArtistFactory, $stateParams) {
        return ArtistFactory.fetchById($stateParams.artistId);
      }
    }
  });

  $stateProvider.state('artist.albums', {
    url: '/albums',
    template: "<album-list albums='artist.albums' ></album-list>",
    //templateUrl: '/js/artist/templates/artist-albums.html'
  });

  $stateProvider.state('artist.songs', {
    url: '/songs',
    template: "<song-list songs='artist.songs'></song-list>"
    //templateUrl: '/js/artist/templates/artist-songs.html'
  });

});
