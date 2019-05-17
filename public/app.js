const app = angular.module('App', []);

app.controller('appController', ['$http', function($http){


  // create user
  this.createUser = function(){
    $http({
      method: 'POST',
      url: '/users',
      data: {
        username: this.username,
        password: this.password
      }
    }).then( response => {
      console.log(response);
    }).catch( err => {
      console.log(err);
    })
  }

  //login user
  this.logIn = function(){
    $http({
      method: 'POST',
      url: '/sessions',
      data: {
        username: this.logUsername,
        password: this.logPassword
      }
    }).then( response => {
      console.log(response);
      controller.username = null;
      controller.password = null;
      controller.goApp();
    }).catch( err => {
      console.log(err);
    })
  }
  //log out user
  // this.logOut = function(){
  //   $http({
  //     method: 'DELETE',
  //     url: '/sessions'
  //   }).then( response => {
  //     console.log(response);
  //     controller.loggedInUsername = null;
  //   }).catch( err => {
  //     console.log(err);
  //   })
  // }
}]);
