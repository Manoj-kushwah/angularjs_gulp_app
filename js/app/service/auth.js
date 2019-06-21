/* -- auth -- */
app.service('auth',['$state', function($state){
    this.user = null;
    this.isAuth = function(){
        return (this.user!=null);
    };
    this.logout = function(){
        $state.go('login');
    	return this.user = null;
    };
}]);