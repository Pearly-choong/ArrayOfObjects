console.log('Array of objects');

var dogs = [
  {
    name : 'Bobby',
    id   : 'A101',
    breed: 'Golden Retrievers',
    color: 'Golden and White',
    height: 60,
    age : 3,
    photo: 'images/dog1.jpg',
    photo2: 'images/dog1a.jpg',
    photo3: 'images/dog1b.jpg'
  },

  {
    name : 'Chowy',
    id   : 'A102',
    breed: 'Chow Chow',
    color: 'Brown',
    height: 100,
    age : 10,
    photo: 'images/dog2.jpg',
    photo2: 'images/dog2a.jpg',
    photo3: 'images/dog2b.jpg'
  },

  {
    name : 'Kitty',
    id   : 'A103',
    breed: 'Cavalier King Charles Spaniel',
    color: 'Black and Brown',
    height: 45,
    age : 4,
    photo: 'images/dog3.jpg',
    photo2: 'images/dog3a.jpg',
    photo3: 'images/dog3b.jpg'
  },

  {
    name : 'Boo',
    id   : 'A104',
    breed: 'Bulldog',
    color: 'Black and Brown',
    height: 40,
    age : 8,
    photo: 'images/dog4.jpg',
    photo2: 'images/dog4a.jpg',
    photo3: 'images/dog4b.jpg'
  },

  {
    name : 'Jojo',
    id   : 'A105',
    breed: 'German Shepherd',
    color: 'Black and Brown',
    height: 60,
    age : 3,
    photo: 'images/dog5.jpg',
    photo2: 'images/dog5a.jpg',
    photo3: 'images/dog5b.jpg'
  }

];

//all Dogs

// ===== standard ======
// for (var i = 0; i < dogs.length; i++) {
//   document.getElementById('dogs').innerHTML += '</br><h1 class="jumbotron text-danger"> ' + dogs[i].name + '</h1>';
//   document.getElementById('dogs').innerHTML += '<img class="img-thumbnail myDogs" src=" ' + dogs[i].photo + ' " alt="Dog"/>';
//   document.getElementById('dogs').innerHTML += '</br></br> Breed: <h5 class="text-danger" > ' + dogs[i].breed + ' </h5>';
//   document.getElementById('dogs').innerHTML += '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + ' </h5>';
//   document.getElementById('dogs').innerHTML += '</br>Height : <h5 class="text-danger" > ' + dogs[i].height + ' </h5>';
// }

// ======== column styling ======
var id = 101; //variable is used to generate id's for image

function allDogs(){
  document.getElementById('dogs').innerHTML = ''; //to clear the container
for (var i = 0; i < dogs.length; i++) {
  document.getElementById('dogs').innerHTML
   += '</br><h1 class="jumbotron text-danger"> ' + dogs[i].name + '</h1>'
   + '<div class="row">'
   + '<div class="col">'
   + '<img id="A' + id.toString() + ' " class="img-thumbnail myDogs" src=" ' + dogs[i].photo + ' " alt="Dog"/>'
   + '</div>'
   + '<div class="col">'
   + '</br></br> Breed: <h5 class="text-danger" > ' + dogs[i].breed + ' </h5>'
   + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + ' </h5>'
   + '</br> Height : <h5 class="text-danger" > ' + dogs[i].height + ' </h5>'
   + '</div>'
   + '</div>';
   id++; // id is incremented automatically
   console.log(id.toString());
}
}

document.getElementById('bullDog').addEventListener('click', function(){
  console.log(dogs);
  document.getElementById('dogs').innerHTML = '';
  for (var i = 0; i < dogs.length; i++) {
    if (dogs[i].breed === 'Bulldog') {
    document.getElementById('dogs').innerHTML
    += '</br><h1 class="jumbotron text-danger"> ' + dogs[i].name + '</h1>'
    + '<div class="row">'
    + '<div class="col">'
    + '<img class="img-thumbnail myDogs mt-1" src=" ' + dogs[i].photo + ' " alt="Dog"/>'
    + '</div>'
    + '<div class="col">'
    + '</br> Breed: <h5 class="text-danger" > ' + dogs[i].breed + ' </h5>'
    + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + ' </h5>'
    + '</br>Height : <h5 class="text-danger" > ' + dogs[i].height + ' </h5>'
    + '</div>'
    + '</div>';
    }
  }
});


document.getElementById('age').addEventListener('click', function(){
  console.log(dogs);
  document.getElementById('dogs').innerHTML = '';
  for (var i = 0; i < dogs.length; i++) {
    if (dogs[i].age === 3) {
      document.getElementById('dogs').innerHTML
      += '</br><h1 class="jumbotron text-danger"> ' + dogs[i].name + '</h1>'
      + '<div class="row">'
      + '<div class="col">'
      + '<img class="img-thumbnail myDogs mt-1" src=" ' + dogs[i].photo + ' " alt="Dog"/>'
      + '</div>'
      + '<div class="col">'
      + '</br> Breed: <h5 class="text-danger" > ' + dogs[i].breed + ' </h5>'
      + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + ' </h5>'
      + '</br>Height : <h5 class="text-danger" > ' + dogs[i].height + ' </h5>'
      + '</div>'
      + '</div>';
    }
  }
});


document.getElementById('height').addEventListener('click', function(){
  console.log(dogs);
  document.getElementById('dogs').innerHTML = '';
  for (var i = 0; i < dogs.length; i++) {
    if (dogs[i].height <= 45){
      document.getElementById('dogs').innerHTML
      += '</br><h1 class="jumbotron text-danger"> ' + dogs[i].name + '</h1>'
      + '<div class="row">'
      + '<div class="col">'
      + '<img class="img-thumbnail myDogs mt-1" src=" ' + dogs[i].photo + ' " alt="Dog"/>'
      + '</div>'
      + '<div class="col">'
      + '</br> Breed: <h5 class="text-danger" > ' + dogs[i].breed + ' </h5>'
      + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + ' </h5>'
      + '</br>Height : <h5 class="text-danger" > ' + dogs[i].height + ' </h5>'
      + '</div>'
      + '</div>';
    }
  }
});


document.getElementById('changeName').addEventListener('click', function(){
  var oldName = document.getElementById('oldName').value;
  var newName = document.getElementById('newName').value;
  console.log(oldName, newName);
  for (var i=0; i< dogs.length; i++){
    if (oldName === dogs[i].name){
      dogs[i].name = newName;
    }
  }
  console.log(dogs);
  allDogs();

});

//document.getElementById('all').addEventListener('click', function(){
  allDogs();

//});


$('.myDogs').on('click', function(){
  console.log('dogs');
  console.log(typeof(this.id));// to check the data type
  console.log(this.id);
  document.getElementById('modalContent').innerHTML = '';
  $('.myModal').show();
  for (var i = 0; i < dogs.length ; i++){
    console.log(typeof(dogs[i].id));
    console.log(dogs[i].id);
    console.log(i);
    console.log(dogs[i].id === this.id);
    // id property of dogs is checked for equivalence with the image id of the clicked element
    if(this.id.trim() === dogs[i].id.trim()){
      //remove leading and trailing space in the string while trying to match
      console.log(dogs[i].name);
      console.log(dogs[i].breed);
      console.log(dogs[i].age);
      console.log(dogs[i].height);
      document.getElementById('modalContent').innerHTML
      += '<div class="display-5 jumbotron"> ' + dogs[i].name + '</br>'
      + 'Breed: ' + dogs[i].breed + '</br>'
      + 'Age: ' + dogs[i].age + '</br>'
      + 'Height: ' + dogs[i].height
      + '</div>'
      //+ '<img class="card-thumbnail myDogs" src="' + dogs[i].photo + '" alt="Dog"/>'
      + '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">'
      + '<ol class="carousel-indicators">'
      + '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'
      + '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'
      + '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>'
      + '</ol>  <div class="carousel-inner"> <div class="carousel-item active">'
      + '<img class="card-thumbnail myDogs" src="' + dogs[i].photo + '" alt="Dog"/>'
      + '</div> <div class="carousel-item">'
      + '<img class="card-thumbnail myDogs" src="' + dogs[i].photo2 + '" alt="Dog"/>'
      + '</div> <div class="carousel-item">'
      + '<img class="card-thumbnail myDogs" src="' + dogs[i].photo3 + '" alt="Dog"/>'
      + '</div> </div>'
      + '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'
      + '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
      + '<span class="sr-only">Previous</span> </a>'
      + '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'
      + '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
      + '<span class="sr-only">Next</span></a></div>';
    }
  }
});


$('.closeBar').on('click', function(){
  $('.myModal').hide();
});
