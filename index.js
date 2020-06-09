'use strict';

// this function fetches the dog images
function getDogImages() {
  const fetchNum = $('#numberOfDogs').val(),
    fetchUrl = `https://dog.ceo/api/breeds/image/random/${fetchNum}`;
  fetch(fetchUrl)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

// this function generates the results
function generateResults(responseJson) {
  const dogImgs = [];
  for (let i = 0; i<responseJson.message.length; i++) {
    dogImgs.push(`<img src="${responseJson.message[i]}" class="results-img"></img>`);
  }
  return dogImgs;
}

// this function displays the results
function displayResults(responseJson) {
  const html = generateResults(responseJson).join('');
  $('#dogs').html(html);
  $('.results').removeClass('hidden');
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