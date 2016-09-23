angularapp.controller('editController',function($scope,$location,friendsFactories){
  $scope.Onefriend = {};
  $scope.indexOne = function(){
      friendsFactories.indexOne($location.url(),function(friend){
      $scope.Onefriend = friend;
    })
  }
  $scope.indexOne();
  $scope.editFriend = function(){
      friendsFactories.editOne($scope.Onefriend,function(friend){
        $location.path('/');
    })
  }
})
