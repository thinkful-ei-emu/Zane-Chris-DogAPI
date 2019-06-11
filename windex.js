'use strict';

/*eslint-env jquery*/

function handleSubmitClick() {
  $('#js-breed-form').submit(event => {
    event.preventDefault();
    console.log('`handleSubmitClick` ran');
    const dogBreed = $('.select-dog-selector').val();
    console.log(dogBreed);
    getDogImages(dogBreed);
    
      
      
      
  });
}
function getDogImages(dogBreed) {
  //console.log(number);
  console.log('`getDogImages` ran');
  console.log();
  let fetchNow = fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
    
}


function displayResults(responseJson) {
  console.log('`displayResults` ran');
  console.log(responseJson);
  $('img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
    
  //display the results section
  $('.results').removeClass('hidden');
}
  



$(function(){
  handleSubmitClick();
});