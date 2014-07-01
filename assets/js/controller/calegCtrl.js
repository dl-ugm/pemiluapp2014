angular.module('pemiluApp')
	.controller('calegCtrl',['$scope','$http',
		function($scope,$http){
			$scope.isLoaded = false;
			// ambil data provinsi
			$http.get('http://api.pemiluapi.org/candidate/api/provinsi?apiKey='+apiKey)
			.success(function(data){
				// save the data
				$scope.provinces = data.data.results.provinsi;
				// ambil data caleg dan bagi per provinsi
				$http.get('http://api.pemiluapi.org/candidate/api/caleg?apiKey='+apiKey+'&limit=100')
				.success(function(data){
					// save the data to a variables
					angular.forEach($scope.provinces,function(p){
						p.caleg = [];
						angular.forEach(data.data.results.caleg, function(caleg){
							// separate the data
							if(p.id == caleg.provinsi.id) p.caleg.push(caleg);
						});
					});
					$scope.isLoaded = true;
				})
				.error(function(){
					alert('Error getting data');
				});
			})
			.error(function(){
				console.log('error');
				alert('Gagal ambil data provinsi')
			});
			$scope.cekPartai = function(nama){
				if(typeof nama=='undefined' || nama==''){
					return 'Non Partai';
				}else{
					return nama;
				}
			}
		}
	]);