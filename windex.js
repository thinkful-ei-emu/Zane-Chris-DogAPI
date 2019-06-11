'use strict';

/*eslint-env jquery*/

function handleSubmitClick() {
  $('#js-breed-form').submit(event => {
    event.preventDefault();
    console.log('`handleSubmitClick` ran');
    const dogBreed = $('.dog-breed-search').val();
    console.log(dogBreed);
    getDogImages(dogBreed);
    
      
      
      
  });
}
function getDogImages(dogBreed) {
  //console.log(number);
  console.log('`getDogImages` ran');
  console.log();
  let fetchNow = fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response =>{
      if(response.ok){ 
        return response.json();
      }
      throw new Error (response.statusText)
    })
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert(`Breed Not Found. Please enter Another breed.${error.message}`));
    
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