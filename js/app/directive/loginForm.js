/* -- login form -- */
 app.directive('loginForm', ['$log', 'validation', 'api', '$state', function($log, validation, api, $state){
    var html = '<div class="container-fluid">'
            +'  <div class="row">'
            +'    <div class="col-sm-6 col-sm-offset-3">'
            +'      <form class="form-horizontal" ng-submit="submitLogin();">'
            +'        <div class="form-group">'
            +'          <label class="control-label col-sm-2" for="email">Email:</label>'
            +'          <div class="col-sm-10">'
            +'            <input type="email" class="form-control" ng-model="user.email" id="email" placeholder="Enter email" name="email">'
            +'          </div>'
            +'        </div>'
            +'        <div class="form-group">'
            +'          <label class="control-label col-sm-2" for="pwd">Password:</label>'
            +'          <div class="col-sm-10">          '
            +'            <input type="password" class="form-control" ng-model="user.password" id="pwd" placeholder="Enter password" name="pwd">'
            +'          </div>'
            +'        </div>'
            +'        <div class="form-group">  '      
            +'          <div class="col-sm-offset-2 col-sm-10">'
            +'            <div class="checkbox">'
            +'              <label><input type="checkbox" name="remember"> Remember me</label>'
            +'            </div>'
            +'          </div>'
            +'        </div>'
            +'        <div class="form-group">   '     
            +'          <div class="col-sm-offset-2 col-sm-10">'
            +'            <button type="submit" class="btn btn-default">Submit</button>'
            +'          </div>'
            +'        </div>'
            +'      </form>'
            +'    </div>'
            +'    </div>'
            +'  </div>';
    return {
        template: html,
        link: function(scope, el, attr){
            scope.user = {};
            scope.submitLogin = function(){
                if (!validation.isEmail(scope.user.email)) {
                    return false;
                }
                if (scope.user.password==null) {
                    return false;
                }
                //scope.auth.user = scope.user;


                api.login(scope.user.email, scope.user.password).then(function(res){
                    $log.log('login res: ', res);
                    if (res.data) {
                        $log.log('login data: ', res.data);
                        $log.log('login User: ', User);
                        var user = new User();
                        $log.log('login user: ', user);
                        user.fromJSON(res.data);
                        $log.log('login user: ', user);
                        scope.auth.user = user;
                        $state.go('user');
                    } else if (res.message) {
                        alert(res.message);
                    }
                },function(err){
                    $log.error('login err: ', err);
                });
            };
        }
    };
}]);
