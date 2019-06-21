/* ------user class------*/
var User=(function(){

	function User(){
		this.userId;
		this.firstName;
		this.lastName;
		this.email;
		this.password;
		this.dob;
		this.role;
		this.gender;
	}

	User.prototype.fromJSON = function(obj){
		for(var key in obj){
			if (typeof obj[key] == 'function') {
				/* ignore functions */
			} else {
				this[key] = obj[key];
			}
		}
	};

	User.prototype.getUserId= function() {
		return this.userId;
	};

	User.prototype.setUserId= function(userId) {
		this.userId = userId;
	};

	User.prototype.getFirstName= function() {
		return this.firstName;
	};

	User.prototype.setFirstName= function(firstName) {
		this.firstName = firstName;
	};

	User.prototype.getLastName= function() {
		return this.lastName;
	};

	User.prototype.setLastName= function(lastName) {
		this.lastName = lastName;
	};

	User.prototype.getEmail= function() {
		return this.email;
	};

	User.prototype.setEmail= function(email) {
		this.email = email;
	};

	User.prototype.getPassword= function() {
		return this.password;
	};

	User.prototype.setPassword= function(password) {
		this.password = password;
	};

	User.prototype.getRole= function() {
		return this.role;
	};

	User.prototype.setRole= function(role) {
		this.role = role;
	};

	User.prototype.getDob= function() {
		return this.dob;
	};

	User.prototype.setDob= function(dob) {
		this.dob = dob;
	};

	User.prototype.getGender= function() {
		return this.gender;
	};

	User.prototype.setGender= function(gender) {
		this.gender = gender;
	};

	return User;

})();// class params.