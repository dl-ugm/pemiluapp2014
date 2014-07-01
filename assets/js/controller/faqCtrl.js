angular.module('pemiluApp')
	.controller('faqCtrl',['$scope','$http',
		function($scope,$http){
			$scope.isLoaded = false;
			// get faqs list
			$http.get('http://api.pemiluapi.org/faq-presiden/api/questions?apiKey='+apiKey).
				success(function(data){
					$scope.faqs = data.data.results.questions;
					$scope.isLoaded = true;
				}).
				error(function(data){
					alert('Gagal ambil data FAQ');
				});
		}
	]);