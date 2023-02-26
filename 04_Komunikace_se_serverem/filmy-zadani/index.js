console.log('funguju!');

// Zobrazovani dat
//1. Filmy

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
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



