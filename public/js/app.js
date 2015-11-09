(function() {
var todo = angular.module('myApp',["ngResource"]);
     
todo.factory('Add',function($resource) {
	return $resource('/todo/:id', {id: '@id'},{
		update: {
			method: 'PUT'
		}
		});
	});

todo.controller('todoController',["$scope", "$filter","Add", function($scope,$filter,Add) {
    $scope.date=new Date();
    $scope.yesterday = new Date;
    $scope.tasks = [];
    $scope.yesTasks =[];
    $scope.yesterday.setDate($scope.yesterday.getDate() -1);
    Add.query().$promise.then(function(response) {
    	angular.forEach(response,function(result) {
        var date = new Date();
        date = date.toLocaleDateString();
        var yesterday = new Date();
        yesterday.setDate($scope.yesterday.getDate() -1);
        yesterday = yesterday.toLocaleDateString();
        if(result.endDate == date || (!result.isFinished)) {
          
          $scope.tasks.push(result);   

        }
        else if(result.endDate == yesterday) {

          $scope.yesTasks.push(result)    

        }
          
    	});
    })
    
  	$scope.isDelayed = function (task) {
  		//var today = new Date();
  		var today = new Date();
        today = today.toLocaleDateString();
  		if( today != task.endDate)
  			return true;
  		else 
  			return false;

  	};

    $scope.timeDelay = function(task) {
      var date = task.endDate;
      

    }

    $scope.addTask = function (name,endDate,endTime) {
    	$scope.tasks.push({name: name, date: endDate, time: endTime, isFinished: false});
    	$scope.taskName = '';
    	$scope.endDate = '';
    	$scope.endTime = ''

    }; 
    $scope.markAsFinished = function (task) {
    	var today = new Date();
        today = today.toLocaleDateString();
      task.isFinished = true;
      if(task.endDate != today) {
        var index = $scope.tasks.indexOf(task);
        $scope.tasks.splice(index,1);
        var yesterday = $scope.yesterday.toLocaleDateString();
        if(task.endDate == yesterday)
            $scope.yesTasks.push(task)
     }
    }
	
}]);
})();