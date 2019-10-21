console.log('Array of objects');

var dogs = [
  {
    name : 'Bobby',
    id   : 'AA123',
    breed: 'Golden Retrievers',
    color: 'Golden and White',
    height: 60,
    age : 3,
    photo: 'images/dog1.jpg'
  },

  {
    name : 'Chowy',
    id   : 'AB124',
    breed: 'Chow Chow',
    color: 'Brown',
    height: 100,
    age : 10,
    photo: 'images/dog2.jpg'
  },

  {
    name : 'Kitty',
    id   : 'AC227',
    breed: 'Cavalier King Charles Spaniel',
    color: 'Black and Brown',
    height: 45,
    age : 4,
    photo: 'images/dog3.jpg'
  },

  {
    name : 'Boo',
    id   : 'AA237',
    breed: 'Bulldog',
    color: 'Black and Brown',
    height: 40,
    age : 8,
    photo: 'images/dog4.jpg'
  },

  {
    name : 'Jojo',
    id   : 'AC227',
    breed: 'German Shepherd',
    color: 'Black and Brown',
    height: 60,
    age : 3,
    photo: 'images/dog5.jpg'
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
for (var i = 0; i < dogs.length; i++) {
  document.getElementById('dogs').innerHTML
   += '</br><h1 class="jumbotron text-danger"> ' + dogs[i].name + '</h1>'
   + '<div class="row">'
   + '<div class="col">'
   + '<img class="img-thumbnail myDogs" src=" ' + dogs[i].photo + ' " alt="Dog"/>'
   + '</div>'
   + '<div class="col">'
   + '</br></br> Breed: <h5 class="text-danger" > ' + dogs[i].breed + ' </h5>'
   + '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + ' </h5>'
   + '</br> Height : <h5 class="text-danger" > ' + dogs[i].height + ' </h5>'
   + '</div>'
   + '</div>';
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
      dog[i].name = newName;
    }
  }
  console.log(dogs);
  allDog();

});

document.getElementById('all').addEventListener('click', function(){
  allDogs();

});
