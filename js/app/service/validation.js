/* --- validation -- */
app.factory('validation', function(){
    var PATTERN_EMAIL = "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
    var isEmail = function(str){
        return (RegExp(PATTERN_EMAIL).test(str));
    };

    /* -- setting for validation -- */
    return {
        isEmail:isEmail
    };
});