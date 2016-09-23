angularapp.controller('newController',function($scope,$location,friendsFactories){
  console.log("entered controller");
  $scope.frndsArr = [];
  $scope.index = function(){
    friendsFactories.index(function(data){
    $scope.frndsArr = data;
  })
}
$scope.index();

  $scope.newFriend= function(){
    friendsFactories.newFriend($scope.friend,function(){
      console.log("hey");
      $scope.friend ={};
      $location.path('/');
    })
  }

$scope.delete = function(_id){
  friendsFactories.delete(_id,function(){
    $scope.index();
  })
}
})
