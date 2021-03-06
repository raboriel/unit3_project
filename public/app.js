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
        username: this.logUsername,
        password: this.logPassword
      }
    }).then( response => {
      console.log(response);
      this.indexOfLogFormToShow = null;
      this.goApp();
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
      this.loggedInUsername = null;
      this.loggedInUserId = null;
      this.getItem();
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
      controller.loggedInUserId = response.data._id
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
        image: this.image,
        price: this.price,
        zip: this.zip,
        description: this.description
        }
    }).then(function(response){
        controller.getItem() //refresh the list
        console.log(response);
    }, function(){
        console.log('error');
    });
  }

  //Function to grab items from the database and show them on the page
  this.indexOfPhotoToShow = null;
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
          image: this.image,
          price: this.updatedPrice,
          zip: this.updatedZip,
          description: this.updatedDescription
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

//send email
  this.indexOfEmailFormToShow = null;
  this.sendEmail = function(sendName, sendMail, sendMessage, sendTo){
    $http({
      method:'POST',
      url: '/send',
        data: {
          name: this.sendName,
          email: this.sendMail,
          message: this.sendMessage,
          sendTo: this.sendTo
          }
      }).then(
          function(response){
            controller.getItem();
            this.indexOfEmailFormToShow = null;
          },
          function(error){
          }
      );
  }

//function to search searchbar

//You added an extra app.controller here so it was not connecting, the data section was set to String, Number etc, I swicthed it to this.name etc. -justin
  this.searchForItem = function(){
    $http({
      method:'GET',
      url: '/items/',
      data: {
        name: this.name,
        email: this.email,
        price: this.price,
        zip: this.zip,
        description: this.description
      }
      }).then(function(response){
          console.log(response);
      }, function(){
          console.log('error');
      });
  }

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
          name: this.name,
          email: this.string,
          phone: this.phone,
          zip: this.zip,
          price: this.price,
          description: this.description
        }
    }).then(function(response){
        controller.getItem();
    }, function(){
        console.log('error');
    });
}

this.getItem();

//show item
this.targetIndexId = '';

this.showItem = (item) => {
  //get item's id and put into targetIndexId
  this.targetIndexId = item;
};

}]);
