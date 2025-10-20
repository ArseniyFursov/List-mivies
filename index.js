const localStorageFilms = [];

const addNameInputNode = document.querySelector('.js-add-name-movie');
const btnAddNewMovieNode = document.querySelector('.js-add-new-movie');
const mainListMoviesNode = document.querySelector('.js-main-list');
const btnRemoveMovieNode = document.querySelector('.js-remove-movie');

const wrapperMovieClass = 'wrapper-movie-removed';
const radioRemovedClass = 'radio-removed';
const nameMovieRemovedClass = 'name-movie-removed';

btnAddNewMovieNode.addEventListener('click', function() {
    addNewMovieInStorage();
    render();
});

function getNameFromInput() {
    if (!addNameInputNode.value) {
        return;
    }

    return addNameInputNode.value;
};

function addNewMovieInStorage() {
    localStorageFilms.push(getNameFromInput());
};

function render() {
    renderStorageList(localStorageFilms);
    renderClearInput();
};

function renderClearInput() {
    addNameInputNode.value = '';
};

function renderStorageList(localStorageFilms) {
    let listStorageFilms = ``
    localStorageFilms.forEach(el => {
        listStorageFilms += 
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
        </div>`
    });
    mainListMoviesNode.innerHTML = listStorageFilms;
};

mainListMoviesNode.addEventListener('click', function(event) {
    let eventTarget = event.target;
    if (eventTarget.closest('.js-remove-movie')) {
        const radioRemovedNode = document.querySelector('.wrapper-radio-movie').classList.add(radioRemovedClass);
        const wrapperMovieNode = document.querySelector('.wrapper-movie').classList.add(wrapperMovieClass);
        const nameMovieRemovedNode = document.querySelector('.name-movie').classList.add(nameMovieRemovedClass);
    }
})

function rendrRemoveMovie() {
    
};