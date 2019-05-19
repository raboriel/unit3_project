const app = angular.module('MyApp', []);

app.controller('appController', ['$http', function($http){
  const controller = this;
  this.includePath = 'partials/items.html';

  // create user
  this.indexOfUserFormToShow = null;

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
      this.indexOfUserFormToShow = null;
    }).catch( err => {
      console.log(err);
    })
  }

  //login user
  this.indexOfLogFormToShow = null;
  this.logIn = function(){
    $http({
      method: 'POST',
      url: '/sessions',
      data: {
        username: this.username,
        password: this.password
      }
    }).then( response => {
      console.log(response);
      this.indexOfLogFormToShow = null;
      controller.goApp();
    }).catch( err => {
      console.log(err);
    })
  }
  // log out user
  this.logOut = function(){
    $http({
      method: 'DELETE',
      url: '/sessions'
    }).then( response => {
      console.log(response);
      controller.loggedInUsername = null;
    }).catch( err => {
      console.log(err);
    })
  }
  //go to user session
  this.goApp = function(){
    $http({
      method: 'GET',
      url:'/app'
    }).then( response => {
      console.log(response);
      controller.loggedInUsername = response.data.username
    }).catch( err => {
      console.log(err);
    })
  }
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
          zip: this.updatedZip
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

//function to search searchbar
app.controller('MyController', ['$http', function($http){
    this.searchForItem = function(){
        $http({
            method:'GET',
            url: '/items/',
            data: {
                name: String,
                zip: Number,
                price: Number
            }
        }).then(function(response){
            console.log(response);
        }, function(){
            console.log('error');
        });
    }
}]);
//function to toggle item when clicked
this.toggleItemComplete = function(item){
    let newValue;
    if(item.complete === true){
        newValue = false;
    } else {
        newValue = true;
    }

    $http({
        method:'PUT',
        url: '/items/' + item._id,
        data: {
          name: String,
          email: String,
          phone: Number,
          zip: Number,
          price: Number
        }
    }).then(function(response){
        controller.getItems();
    }, function(){
        console.log('error');
    });
}

}]);
