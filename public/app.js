const app = angular.module('MyApp', []);

app.controller('appController', ['$http', function($http){
   const controller = this;

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

  //create item
  this.createItem = function(){
    $http({
      method:'POST',
      url: '/items',
      data: {
          name: this.name,
          email: this.email,
          phone: this.phone,
          price: this.price,
          zip: this.zip
        }
    }).then(function(response){
        controller.getItem() //refresh the list
        console.log(response);
    }, function(){
        console.log('error');
    });
  }

  //Function to grab items from the database and show them on the page
  this.getItem = function(){
    $http({
      method:'GET',
      url: '/items',
    }).then(function(response){
        controller.items = response.data;
        console.log(response);
    }, function(){
        console.log('error');
    });
  };

  // Function to delete an item
  this.deleteItem = function(item){
  $http({
    method:'DELETE',
    url: '/items/' + item._id
  }).then(
    function(response){
      controller.getItem(); //refresh item list
    },
    function(error){
    }
    );
  }

  //function to update an item
  this.editItem = function(item){
    $http({
      method:'PUT',
      url: '/items/' + item._id,
        data: {
          name: this.updatedName,
          email: this.updatedEmail,
          phone: this.updatedPhone,
          price: this.updatedPrice,
          email: this.updatedEmail
          }
      }).then(
          function(response){
            controller.getItem();
            controller.indexOfEditFormToShow = null;
          },
          function(error){

          }
      );
  }


  this.getItem();

}]);
