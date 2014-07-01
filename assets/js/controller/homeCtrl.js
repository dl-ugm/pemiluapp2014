angular.module('pemiluApp')
	.controller('homeCtrl',['$scope','$http','$stateParams',
		function($scope,$http,$stateParams){
			$scope.isLoaded = false;
			$scope.candidates = {};
			$scope.candidates.president = [];
			$scope.candidates.vicepresident = [];
			// api untuk load seluruh data kandidat capres cawapres
			$http.get('http://api.pemiluapi.org/calonpresiden/api/caleg?apiKey=fea6f7d9ec0b31e256a673114792cb17').
				success(function(data){ // jika pemanggilan data berhasil
					var kandidat = data.data.results.caleg;
					// pisahkan yang mana capres dan yang mana cawapres
					angular.forEach(kandidat,function(k){
						if(k.role == 'capres'){
							$scope.candidates.president.push(k);
							// console.log($scope.candidates.president);
						}else{
							$scope.candidates.vicepresident.push(k);
						}
					});
					// ambil data kandidat
					if($stateParams.tipe=='capres'){
						if($stateParams.id=='0'){ idnya = 1 }else{ idnya = 0 }
						$scope.candidates.detail = $scope.candidates.president[idnya];
					}else{
						$scope.candidates.detail = $scope.candidates.vicepresident[$stateParams.id];
					}
					console.log($scope.candidates);
					$scope.isLoaded=true;
				}).
				error(function(data){
					alert('fail getting candidate data');
				});
		}
	]);
angular.module('pemiluApp').controller('kandidatCtrl',['$scope','$stateParams','$http',function($scope,$stateParams,$http){
	$scope.candidates = {};
	$scope.isLoaded = false;
	$http.get('http://api.pemiluapi.org/calonpresiden/api/caleg/'+$stateParams.id+'?apiKey='+apiKey).
		success(function(data){
			$scope.candidates.detail = data.data.results.caleg[0];
			$scope.isLoaded=true;
		}).
		error(function(){
			$scope.candidates.detail = {};
			console.log('error');
		});
}]);
angular.module('pemiluApp').controller('eventCtrl',['$scope','$stateParams','$http',function($scope,$stateParams,$http){
	$scope.events = {};
	$scope.isLoaded = false;
	$scope.candidates = {'ps':'Prabowo Subianto','jk':'Jusuf Kalla','jw':'Joko Widodo','hr':'Hatta Rajasa'};
	var label = '$scope.candidates.'+$stateParams.id;
	eval('$scope.candidate = '+label);
	$http.get('http://api.pemiluapi.org/calonpresiden/api/events?apiKey='+apiKey+'&id_calon='+$stateParams.id).
		success(function(data){
			$scope.events = data.data.results.events;
			$scope.isLoaded=true;
		}).
		error(function(){
			$scope.events = {};
			console.log('error');
		});
}]);
angular.module('pemiluApp').controller('promisesCtrl',['$scope','$stateParams','$http',function($scope,$stateParams,$http){
	$scope.promises = {};
	$scope.isLoaded = false;
	$scope.candidates = {'ps':'Prabowo Subianto','jk':'Jusuf Kalla','jw':'Joko Widodo','hr':'Hatta Rajasa'};
	var label = '$scope.candidates.'+$stateParams.id;
	eval('$scope.candidate = '+label);
	$http.get('http://api.pemiluapi.org/calonpresiden/api/promises?apiKey='+apiKey+'&id_calon='+$stateParams.id).
		success(function(data){
			$scope.promises = data.data.results.promises;
			$scope.isLoaded=true;
		}).
		error(function(){
			$scope.promises = {};
			console.log('error');
		});
}]);