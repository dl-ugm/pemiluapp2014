angular.module('pemiluApp')
	.controller('mainCtrl',['$scope','$http',
		function($scope,$http){
			// set initial value for active menu
			$scope.activeMenu = 'home';
			// setting variabel
			// var apiKey = 'fea6f7d9ec0b31e256a673114792cb17';
			// $scope.test = 'aaaa';
			// $scope.faq = {};
			// // fungsi untuk panggil api
			// var faqURL = 'http://api.pemiluapi.org/pendidikan/api/pertanyaan?apiKey='+apiKey;
			// $http({method: 'GET', url: faqURL}).
			//    success(function(data, status, headers, config) {
			//      $scope.faq = data;
			//      console.log(data);
			//    }).
			//    error(function(data, status, headers, config) {
			//    	 alert('gagal ambil data');
			//    });
		}
	]);