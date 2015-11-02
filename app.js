var app = angular.module('friendsList', []);

app.controller('mainCtrl', function($scope){
    $scope.name = "Patrick Ackerman";
    $scope.friends = [{name: 'Patrick Ackerman', age: '30', birthplace: 'Bethlehem'}, {name: 'Patrick Ackerman', age: '30', birthplace: 'Bethlehem'}, {name: 'Patrick Ackerman', age: '30', birthplace: 'Bethlehem'}, {name: 'Patrick Ackerman', age: '30', birthplace: 'Bethlehem'}];
    $scope.addFriend = function (newFriend) {
      $scope.friends.push({name: newFriend, age: '?', birthplace: '?'});
      $scope.newFriendInput = '';
    }
});
