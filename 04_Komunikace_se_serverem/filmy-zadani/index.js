console.log('funguju!');

// Zobrazovani dat
//1. Filmy

/*fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const movieDetail = document.querySelector('.movie-list');
        movieDetail.innerHTML = data.map((movie) => {
            return `
                <li class="movie-detail">
                    <div class="movie-poster">
                    <img 
                        src=${movie.posterUrl}
                        alt=${movie.title}
                    />
                    </div>
                    <div class="movie-info">
                    <h2 class="movie-title">${movie.title}</h2>
                    <div class="movie-year">Rok vydání: ${movie.year}</div>
                    <div class="movie-link">
                         <a href=${movie.link} target="_blank">Odkaz na CSFD</a>
                    </div>
                    </div>
                </li>`
        });
    });
*/

// 2. Filmy dle zanru

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/genres')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const selectOption = document.querySelector('#select-genre')
        selectOption.innerHTML = data.map((genre) => {
            return `
            <option value=${genre}>${genre}</option>
            `
        })
    })

const renderFilms = (movies) => {
    const movieDetail = document.querySelector('.movie-list');
    movieDetail.innerHTML = movies.map((movie) => {
        return `
            <li class="movie-detail">
                <div class="movie-poster">
                <img 
                    src=${movie.posterUrl}
                    alt=${movie.title}
                />
                </div>
                <div class="movie-info">
                <h2 class="movie-title">${movie.title}</h2>
                <div class="movie-year">Rok vydání: ${movie.year}</div>
                <div class="movie-link">
                     <a href=${movie.link} target="_blank">Odkaz na CSFD</a>
                </div>
                </div>
            </li>`
    });
};


const filterForm = document.querySelector('.filters');
filterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectElm = document.querySelector('#select-genre');
    fetch(`https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies?genre=${selectElm.value}`)
        .then((response) => {
            return response.json();
        
        })
        .then(renderFilms);
});



