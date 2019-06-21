/* -- login controller -- */
app.controller('login',['$scope', 'validation', 'api', '$log', '$state', function($scope, validation, api, $log, $state){
    $scope.user = {};
    $scope.submitLogin = function(){
        if (!validation.isEmail($scope.user.email)) {
            return false;
        }
        if ($scope.user.password==null) {
            return false;
        }
        //$scope.auth.user = scope.user;

        api.login($scope.user.email, $scope.user.password).then(function(res){
            $log.log('login res: ', res);
            if (res.data) {
                $log.log('login data: ', res.data);
                $log.log('login User: ', User);
                var user = new User();
                $log.log('login user: ', user);
                user.fromJSON(res.data);
                $log.log('login user: ', user);
                $scope.auth.user = user;
                $state.go('user');
            } else if (res.message) {
                alert(res.message);
            }
        },function(err){
            $log.error('login err: ', err);
        });
    };
}]);