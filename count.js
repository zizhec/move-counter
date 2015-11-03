 angular.module('intervalExample', [])
 .controller('timeCtrl', ['$scope', '$interval',
 	function($scope, $interval) {


 		$scope.currCounter = 0;
 		$scope.counterList = [];
 		$scope.isDisabled = true;
 		var timerMax = 60 * 10;
 		$scope.currTimer = timerMax;

 		$scope.start = function() {
 			 		$scope.isDisabled = false;
 			$interval(function() {
 				$scope.currTimer = $scope.currTimer - 1;

 				if($scope.currTimer == 0) {
 					var item = {
 						 time:new Date(),
						 count:$scope.currCounter
 					}
 					$scope.counterList.push(item);
 					$scope.currTimer = timerMax;
 					$scope.currCounter = 0;
 					 $scope.isDisabled = true;
 				}
 			}, 1000, timerMax)
 		}


 	}
 ]);