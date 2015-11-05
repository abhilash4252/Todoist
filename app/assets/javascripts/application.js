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
var todo = angular.module('myApp',[]);
     
	
todo.controller('todoController',["$scope", function($scope) {
    $scope.date=new Date();
    $scope.tasks="";
  	$scope.yesTasks="";
    function task(name,time,isDelayed,timeDelay,isFinished) {
	          var task=new Object();
	          task.name=name;
			  task.time=time;
			  task.isDelayed=isDelayed;
			  task.timeDelay=timeDelay;
			  task.isFinished=isFinished;
			  return task;
            };
      
	
}]);
})();