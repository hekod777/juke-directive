juke.directive('albumList',function(){
	//templateUrl: './js/album/templates/albums.html',
	return {
		//template:'aaa',
		scope:{
			albums: '='
		},
		templateUrl:'./js/album/templates/albumList.html',
		//controller:'AlbumsCtrl',
	}
	//controller:'',
})