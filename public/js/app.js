//=============
//DEPENDENCIES
//=============
const app = angular.module('MarketPlace', []);

//===========
//CONTROLLER
//===========
app.controller('MyController', ['$http', function($http){
  this.testing = 'This is working';
}]);
