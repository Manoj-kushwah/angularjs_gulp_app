/* -- navbar -- */
app.directive('navbar', function(){
    var html = ''
                +'<nav class="navbar navbar-inverse">'
                +'<div class="container-fluid">'
                +'    <div class="navbar-header">'
                +'      <a class="navbar-brand" href="#">WebSiteName</a>'
                +'    </div>'
                +'    <ul ng-if="auth.isAuth()" class="nav navbar-nav">'
                +'      <li class="active"><a href="#">Home</a></li>'
                +'      <li><a href="#">Page 1</a></li>'
                +'      <li><a href="#">Page 2</a></li>'
                +'    </ul>'
                +'    <form ng-if="auth.isAuth()" class="navbar-form navbar-left" action="/action_page.php">'
                +'      <div class="form-group">'
                +'        <input type="text" class="form-control" placeholder="Search" name="search">'
                +'      </div>'
                +'      <button type="submit" class="btn btn-default">Submit</button>'
                +'    </form>'
                +'    <ul class="nav navbar-nav navbar-right">'
                +'      <li ng-if="!auth.isAuth()"><a ui-sref="login">Login</a></li>'
                +'      <li ng-if="auth.isAuth()"><a>{{auth.user.firstName}} {{auth.user.lastName}}</a></li>'
                +'      <li ng-if="auth.isAuth()"><a ng-click="auth.logout();">Logout</a></li>'
                +'    </ul>'
                +'  </div>'
                +'</nav>'
                +'';
    return {
        template: html,
        controller: 'app',
        // link:function(scope){}
    };
});