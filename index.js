'use strict';
const log = console.log
// this function fetches the dog images
function getDogImages() {
  const breed = $('#typeOfBreed').val(),
    fetchUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
    
  fetch(fetchUrl)
    .then(response => response.json()) 
    .then(responseJson => displayResults(responseJson))
    .catch(error => log('We couldn"t find that breed. Please try another breed name.'));
    
}

// this function generates the results
function generateResults(responseJson) {
  const dogImg = [];
  // for (let i = 0; i<responseJson.message.length; i++) {
    dogImg.push(`<img src="${responseJson.message}" class="results-img"></img>`);
  // }
  return dogImg;
}

// this function displays the results
function displayResults(responseJson) {
  log(responseJson.status)
  if(responseJson.status === 'error') {
    alert('We couldnt find that breed. Please try another breed name.')
  }
  else {const html = generateResults(responseJson).join('');
  $('#dogs').html(html);
  $('.results').removeClass('hidden');
}
}

// this function creates the watch form
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImages();
  });
}

//this function calls the watch form
$(function() {
  watchForm();
});