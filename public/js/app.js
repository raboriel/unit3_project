//=============
//DEPENDENCIES
//=============
const app = angular.module('MarketPlace', []);

//===========
//CONTROLLER
//===========
app.controller('MyController', ['$http', function($http){

//Function to create an item and add it to the database
  this.createItem = function(){
      $http({
        method:'POST',
        url: '/marketplace',
        data: {
            name: this.name,
            email: this.email,
            phone: this.phone,
            email: this.email
          }
      }).then(function(response){
          console.log(response);
      }, function(){
          console.log('error');
      });
  }

}]);
