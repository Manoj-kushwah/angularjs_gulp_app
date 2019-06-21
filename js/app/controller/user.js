/* -- user controller -- */
app.controller('user', ['$scope', '$log', 'api', function($scope, $log, api){
	$scope.userList = [];
	$scope.userDetails = null;
	$scope.newUser = {};
	$scope.userSortBy = 'firstName';

    $scope.resetNewUser=function(){
        $scope.newUser = {};
	};

	$scope.userListSortBy = function(by){
		$scope.userSortBy = by;
	};

	$scope.viewDetails = function(user){
		$scope.userDetails = user;
	};

	$scope.addNewUser = function(){
        var user = $scope.newUser;
        api.addNewUser(user).then(function (res) {
			$log.log('addNewUser res: ',res);
			if (res.data != null) {
                user =  new User;
                user.fromJSON(res.data);
                $scope.userList.unshift(user);
                $('#createUser').modal('hide');
                $scope.resetNewUser();
			}
        },function (err) {
			$log.log('addNewUser err: ',err);
        })
	};

	$scope.deleteUser = function(user){
		var index = $scope.userList.indexOf(user);
		api.deleteUser(user.userId).then(function(res){
            $log.log('deleteUser res: ', res);
            $scope.userList.splice(index, 1);
		},function(err){
            $log.log('deleteUser err: ', err);
		});
	};

	api.getAllUsers().then(function(res){
		$log.log('getAllUsers res: ', res);
		if (res.data) {
			$log.log('getAllUsers res.data: ', res.data);
			$log.log('getAllUsers userList: ', $scope.userList);
			for (var i = 0; i < res.data.length; i++) {
				var user  = new User();
				user.fromJSON(res.data[i]);
				$scope.userList.push(user);
			}			
			$log.log('getAllUsers userList: ', $scope.userList);
		}
	},function(err){
		$log.log('getAllUsers err: ', err);
	});
}]);