(function() {
var todo = angular.module('myApp',["ngResource"]);
     
todo.factory('Add',function($resource) {
	return $resource('/todo/:id', {id: '@id'}, 
    { 
      'update' :{
        method: 'PUT'
      }
    });
	});

todo.controller('todoController',["$scope", "$filter","Add", function($scope,$filter,Add) {
    $scope.date=new Date();
    $scope.yesterday = new Date;
    $scope.tasks = [];
    $scope.yesTasks =[];
    $scope.newTaskCount = 0;
    $scope.delayedTaskCount = 0;
    $scope.yesterday.setDate($scope.yesterday.getDate() -1);
    Add.query().$promise.then(function(response) {
    	angular.forEach(response,function(result) {

        var split = result.endDate.split('/');
        var date = new Date();
        date.setMonth(split[0] - 1);
        date.setDate(split[1]);
        date.setYear(split[2]);
        
        var today = new Date()
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate() -1);
        var newDate = new Date(result.created_at);
    if(newDate.getTime()>yesterday.getTime())
          $scope.newTaskCount += 1;
          
        if(today.getTime() == date.getTime() || (!result.isFinished && (today.getTime() >= date.getTime()))) {
          if((!result.isFinished && (today.getTime() >= date.getTime()))&& (today.getTime() != date.getTime()) ) {
            $scope.delayedTaskCount += 1;
          }
          $scope.tasks.push(result);   

        }
        else if(date.getTime() == yesterday.getTime() && result.isFinished) {

          $scope.yesTasks.push(result)    

        }

    
    	});
    })
    
  	$scope.isDelayed = function (task) {
  		//var today = new Date();
  		var date = new Date();
        if(date.getDate()<10) {
          date = date.getMonth()+1+"/0"+date.getDate()+"/"+date.getFullYear();
        }
        else {
          date = date.toLocaleDateString();
        }
  		if( date != task.endDate){
  			
        return true;

      }

  		else 
  			return false;

  	};

    $scope.timeDelay = function(task) {
      var timeDelay ="";
      
      var split = task.endDate.split('/');
      var date = new Date();
      date.setMonth(split[0] - 1);
      date.setDate(split[1]);
      date.setYear(split[2]);
      var time = task.endTime.split(':');
      date.setHours(time[0]);
      date.setMinutes(time[1]);
      var today = new Date();
      var diff = today - date ;

      var diffSeconds = diff/1000;
      var HH = Math.floor(diffSeconds/3600);
      var MM = Math.floor(diffSeconds%3600)/60;
      var DD = Math.floor(HH/24);
      if(DD>0){
        var H=HH-(DD*24)
      if(DD==1)
        timeDelay += DD+" day "+H+" hours ";
      else if(DD>1)
        timeDelay += DD+" days "+H+" hours ";
      }
      else 
        timeDelay += HH+" hours "+MM+" minutes ";
      return timeDelay;
      
      

    }

    $scope.addTask = function (name,endDate,endTime) {
    	var task = {name: name, endDate: endDate, endTime: endTime, isFinished: false};
      Add.save(task);
      var split = task.endDate.split('/');
      var date = new Date();
      date.setMonth(split[0] - 1);
      date.setDate(split[1]);
      date.setYear(split[2]);
         
      var today = new Date();
      if(date.getTime() <= today.getTime())
        $scope.tasks.push(task);

      $scope.taskName = '';
    	$scope.endDate = '';
    	$scope.endTime = '';
      
      


    }; 
    $scope.markAsFinished = function (task) {
    	
      task.isFinished = true;
      var update = Add.get({id: task.id});
      update.isFinished = true;
      Add.update({id:task.id},update);
      
    };

    $scope.times = function(task) {
      var timeDelay = "";
      var split = task.endDate.split('/');
      var date = new Date();
      date.setMonth(split[0] - 1);
      date.setDate(split[1]);
      date.setYear(split[2]);
      var time = task.endTime.split(':');
      date.setHours(time[0]);
      date.setMinutes(time[1]);
      timeDelay=  date.getTime();
      return timeDelay;
    }
/*
    $scope.delete = function(task) {
      var index = $scope.tasks.indexOf(task);
      $scope.tasks.splice(index, 1);
      Add.destroy(Add.get({id:task.id}));
    }
*/
	
}]);
})();