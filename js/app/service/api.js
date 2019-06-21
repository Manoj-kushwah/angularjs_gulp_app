/* ------api-----*/
app.service('api', ['$http', '$log', function($http, $log){
	// https://jsistudentportal.000webhostapp.com/user/login.php?email=admin@gmail.com&password=123
	// var URL_LOGIN = 'https://jsistudentportal.000webhostapp.com/user/login.php?email={email}&password={password}';
	var URL_LOGIN = 'https://jsistudentportal.000webhostapp.com/api/user/login/';
	/*-----------Get all user ---------*/
	var URL_ALL_USERS = 'https://jsistudentportal.000webhostapp.com/api/user/get/';
    /*-----------Dalete user ---------*/
    var URL_DELETE_USER = 'http://jsistudentportal.000webhostapp.com/api/user/delete/';
    /*-----------Add user ---------*/
    var URL_Add_USER = 'http://jsistudentportal.000webhostapp.com/api/user/add/';
    /*-----------Update user ---------*/
    var URL_UPDATE_USER = 'http://jsistudentportal.000webhostapp.com/api/user/update/';


    var HEADERS = {
        headers:{
            'Content-Type': 'text/plain'
        }
    };
	
	this.login = function(email, password){
		var data = {"email": email, "password": password};
		return $http.post(URL_LOGIN, data, HEADERS).then(function(res){
			var data = null;
			if (res.data!=null) {
				data = res.data;
			}
			return data;
		},function(err){
			return err;
		});
	};

	this.getAllUsers = function(){
		$log.log('api url 1: ', URL_ALL_USERS);
		var url = URL_ALL_USERS;
		$log.log('api url 2: ', url);
		return $http.get(url).then(function(res){
			var data = null;
			if (res.data!=null) {
				data = res.data;
			}
			return data;
		},function(err){
			return err;
		});
	};

	this.deleteUser = function(userId){
		var data = {"userId": userId};
		return $http.post(URL_DELETE_USER, data, HEADERS).then(function(res){
			var data = null;
			if (res.data!=null) {
				data = res.data;
			}
			return data;
		},function(err){
			return err;
		});
	};

    this.addNewUser = function(user){
        var data = user;
        return $http.post(URL_Add_USER, data, HEADERS).then(function(res){
            var data = null;
            if (res.data!=null) {
                data = res.data;
            }
            return data;
        },function(err){
            return err;
        });
    };

    this.addUpdateUser = function(user){
        var data = user;
        return $http.post(URL_UPDATE_USER, data, HEADERS).then(function(res){
            var data = null;
            if (res.data!=null) {
                data = res.data;
            }
            return data;
        },function(err){
            return err;
        });
    };

}]);