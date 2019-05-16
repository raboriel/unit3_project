//=============
//DEPENDENCIES
//=============
const app = angular.module('MarketPlace', []);

//===========
//CONTROLLER
//===========
app.controller('MyController', ['$http', function($http){
  const controller = this;
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
        controller.getItem(); //refresh item list
        console.log(response);
    }, function(){
        console.log('error');
    });
  }

//Function to grab items from the database and show them on the page
  this.getItem = function(){
    $http({
      method:'GET',
      url: '/marketplace',
    }).then(function(response){
        controller.items = response.data;
        console.log(response);
    }, function(){
        console.log('error');
    });
  };

//Function to delete an item
  this.deleteItem = function(item){
    $http({
      method:'DELETE',
      url: '/marketplace/' + item._id
    }).then(
      function(response){
        controller.getItem(); //refresh item list
      },
      function(error){
      }
    );
  }

this.getItem();

}]);
