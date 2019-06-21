/* --- main controller --*/
app.controller('app', ['$scope', '$rootScope', 'auth', function($scope, $rootScope, auth){
    $scope.auth = auth;
}]);