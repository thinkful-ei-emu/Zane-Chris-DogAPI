'use strict';
/*eslint-env jquery*/

//get the number
function handleSubmitClick() {
  $('#js-num-form').submit(event => {
    event.preventDefault();
    console.log('`handleSubmitClick` ran');
    const dogNumb = $('.js-num-input').val();
    console.log(dogNumb);
    getDogImages(dogNumb);
  });
}

//get the images
function getDogImages(dogNumb) {
  //console.log(number);
  console.log('`getDogImages` ran');
  console.log();
  let fetchNow = fetch(`https://dog.ceo/api/breeds/image/random/${dogNumb}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
  
}
    
function pullData(item){
  return `
  <li class="dog-images"><img src="${item}" class="results-img"></li>
  `;
}

//display the dog Amounts
function displayResults(responseJson) {
  console.log('`displayResults` ran');
  console.log(responseJson);
  const results = responseJson.message.map(item => pullData(item));
  $('.js-dog-images').html(results);
  
  //display the results section
  $('.results').removeClass('hidden');
}

//call the final function
$(function() {
  handleSubmitClick();
  
 
});