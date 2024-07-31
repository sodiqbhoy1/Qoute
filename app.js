document.addEventListener("DOMContentLoaded", () => {
    const newQuote = document.querySelector('#new-quote');
    const soundBtn = document.querySelector('.sound');
    const result = document.querySelector('#result');
    const loader = document.querySelector('#loader');

    let url = 'https://api.quotable.io/random';


    // Function to generate quote
    const qouteGenerator = () => {
        // Show the loader
        loader.style.display = 'block';
        result.style.display = 'none';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Hide the loader
                loader.style.display = 'none';
                result.style.display = 'block';
               
                // Display result
                result.innerHTML = `
                    <div class="qoute-area">
                        <i class="fa-solid fa-quote-left"></i>
                        <p class="qoute">${data.content}</p>
                        <i class="fa-solid fa-quote-right"></i>
                    </div>
                    <div class="author">
                        <span>__</span>
                        <span class="name">${data.author}</span>
                    </div>
                `;
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                loader.style.display = 'none';
                result.style.display = 'block';
                result.innerHTML = '<div id="error">An error occurred while fetching the quote. Please try again.</div>';
            });
    };

    // Load quote when the page loads
    qouteGenerator();

    // Button to generate new quote
    newQuote.addEventListener('click', () => {
        qouteGenerator();
    });

    

});