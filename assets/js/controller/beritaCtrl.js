angular.module('pemiluApp')
	.controller('beritaCtrl',['$scope','$http','$sce',
		function($scope,$http,$sce){
			$scope.isLoaded = false;
			// get faqs list
			$http.get('http://api.pemiluapi.org/berita?json=get_recent_posts&apiKey='+apiKey+'&count=20').
				success(function(data){
					$scope.news = data.posts;
					$scope.isLoaded = true;
				}).
				error(function(data){
					alert('Gagal ambil data Berita');
				});
		}
	]);