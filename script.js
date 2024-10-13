document.addEventListener('DOMContentLoaded', function() {
    const imdbInput = document.getElementById('embedInput1');
    const seasonInput = document.getElementById('embedInput2');
    const episodeInput = document.getElementById('embedInput3');
    const button = document.getElementById('updateEmbed');
    const openHtmlButton = document.getElementById('openHtmlButton');
    const moviesButton = document.getElementById('moviesButton');
    const iframe = document.querySelector('.embed-container iframe');
    const previewText = document.getElementById('previewText');


    function updatePreview() {
        const imdb = imdbInput.value || '[THIS IS THE VARIABLE]';
        const season = seasonInput.value || '[THIS IS THE VARIABLE]';
        const episode = episodeInput.value || '[THIS IS THE VARIABLE]';

        const baseUrl = `https://vidsrc.net/embed/tv?imdb=${imdb}&season=${season}&episode=${episode}`;
        previewText.textContent = 'Current embed: ' + baseUrl;
    }

    function updateEmbed() {
        const imdb = imdbInput.value || '[THIS IS THE VARIABLE]';
        const season = seasonInput.value || '[THIS IS THE VARIABLE]';
        const episode = episodeInput.value || '[THIS IS THE VARIABLE]';

        const fullUrl = `https://vidsrc.net/embed/tv?imdb=${imdb}&season=${season}&episode=${episode}`;
        iframe.src = fullUrl;
    }

    function getRandomMovieUrl() {
        const urls = [
            'https://thistookmeahour.vercel.app',
            'https://frevrstream2.vercel.app',
            'https://frevrstream3.vercel.app'
        ];
        return urls[Math.floor(Math.random() * urls.length)];
    }
  moviesButton.addEventListener('click', function() {
        const randomUrl = getRandomMovieUrl();
        window.location.href = randomUrl;
    });
 openHtmlButton.addEventListener('click', function() {
        window.location.href = 'index (4).html';
    });


    imdbInput.addEventListener('input', updatePreview);
    seasonInput.addEventListener('input', updatePreview);
    episodeInput.addEventListener('input', updatePreview);

    button.addEventListener('click', updateEmbed);

    imdbInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            updateEmbed();
        }
    });
    seasonInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            updateEmbed();
        }
    });
    episodeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            updateEmbed();
        }
    });

    // Initialize with default values
    updatePreview();
    updateEmbed();
});
