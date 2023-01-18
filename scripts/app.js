const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieDate = document.querySelector('.userInputDate');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieDateToDisplay = document.querySelector('.favoriteMovieDate');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let dateInStorage = localStorage.getItem('date');

if(titleInStorage && imageUrlInStorage && dateInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(66, 66, 131, 0.753), rgba(129, 105, 105, 0.712)),
    url('${imageUrlInStorage}')`;
    movieDateToDisplay.textContent = dateInStorage;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieDateInput = movieDate.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('date', movieDateInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(66, 66, 131, 0.753), rgba(129, 105, 105, 0.712)),
    url('${posterUrlInput}')`;
    movieDateToDisplay.textContent = movieDateInput;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieDate.value = '';
});