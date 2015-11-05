// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require angular
//= require angular-ui-router
//= require_tree .
(function() {
var todo = angular.module('myApp',["ngResource"]);
     
todo.factory('Add',function($resource) {
	return $resource('/tasks/:id.json', {id: '@id'},{
		update: {
			method: 'PATCH'
		},
		query: {
			method:'GET'
		}
		});
	});

todo.controller('todoController',["$scope", "$filter","Add", function($scope,$filter,Add) {
    $scope.date=new Date();
    $scope.yesterday = new Date;
    $scope.yesterday.setDate($scope.yesterday.getDate() -1);
    Add.query().$promise.then(function(response) {
    	angular.forEach(response,function(result) {
        $scope.tasks.push(result);       
          
    	});
    })
    
  	$scope.isDelayed = function (task) {
  		//var today = new Date();
  		var today = new Date();
        today = today.toLocaleDateString();
  		if( today != task.date)
  			return true;
  		else
  			return false;

  	};


    $scope.addTask = function (name,endDate,endTime) {
    	$scope.tasks.push({name: name, date: endDate, time: endTime, isFinished: false});
    	$scope.taskName = '';
    	$scope.endDate = '';
    	$scope.endTime = ''

    }; 
    $scope.markAsFinished = function (task) {
    	task.isFinished = true;
    }
	
}]);
})();