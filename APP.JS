document.getElementById('getTrendingBtn').addEventListener('click', getTrendingMovies);

async function getTrendingMovies() {
    const apiKey = 'YOUR_API_KEY'; // Add your TMDB API key here
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        let movieList = '<h3>Trending Movies:</h3>';
        data.results.forEach(movie => {
            movieList += `
                <div>
                    <h4>${movie.title} (${movie.release_date})</h4>
                    <p>Rating: ${movie.vote_average}</p>
                </div>
            `;
        });

        document.getElementById('trendingMovies').innerHTML = movieList;
    } catch (error) {
        console.error('Error fetching trending movies:', error);
    }
}
