
const addNameInputNode = document.querySelector('.js-add-name-movie');
const btnAddNewMovieNode = document.querySelector('.js-add-new-movie');
const mainListMoviesNode = document.querySelector('.js-main-list');
const btnRemoveMovieNode = document.querySelector('.js-remove-movie');

const wrapperMovieClass = 'wrapper-movie-removed';
const radioRemovedClass = 'radio-removed';
const nameMovieRemovedClass = 'name-movie-removed';

btnAddNewMovieNode.addEventListener('click', function() {
    render();
});

function getNameFromInput() {
    if (!addNameInputNode.value) {
        return;
    }

    return addNameInputNode.value;
};

function render() {
    renderStorageList();
    renderClearInput();
};

function renderClearInput() {
    addNameInputNode.value = '';
};

function renderStorageList() {
    let listStorageFilms = ``
    const el = getNameFromInput();
    listStorageFilms = 
        `<div class="wrapper-movie">
            <div class="wrapper-movies">
                <div class="wrapper-radio-movie"></div>
                <div class="wrapper-name-movie">
                    <p class="name-movie">${el}</p>
                </div>
            </div>
            <div class="wrapper-remove-movie">
                <button class="js-remove-movie remove-movie"></button>
            </div>
        </div>` + listStorageFilms;
    mainListMoviesNode.innerHTML += listStorageFilms;
};

mainListMoviesNode.addEventListener('click', event => {
    if (event.target.classList.contains('wrapper-radio-movie')) {
        const wrapperMovie = event.target.closest('.wrapper-movie');
        const nameMovie = wrapperMovie.querySelector('.name-movie');
        const radioMovie = event.target;
        wrapperMovie.classList.add(wrapperMovieClass);
        nameMovie.classList.add(nameMovieRemovedClass);
        radioMovie.classList.add(radioRemovedClass);
    }
    if (event.target.classList.contains('remove-movie')) {
       const wrapperMovie = event.target.closest('.wrapper-movie');
       wrapperMovie.remove();
    }
});