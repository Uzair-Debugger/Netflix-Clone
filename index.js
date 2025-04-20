
// Automatic Image Slider ==============================================

const slides = document.querySelectorAll('.background-video img');
let slideindex = 0;

initializeslide();

function initializeslide() {


    slides[slideindex].classList.add('display');

}
setInterval(showslide, 3000)
function showslide() {
    if (slideindex >= 0) {

        slides[slideindex].classList.remove('display');
    }
    slideindex++;


    if (slideindex >= slides.length) {

        slideindex = 0;
    }
    slides[slideindex].classList.add('display');

}


// ===========================================================
// next and previous movie image slider =========================================
const column1 = document.querySelector('.column1')
const column2 = document.querySelector('.column2')

let movieindex = 0;


function next(respective_column) {
    // Get fresh NodeList of current movies
    const movies = document.querySelectorAll('.' + respective_column + ' .box');

    // Move first movie to end
    if (respective_column === "column1")
        column1.appendChild(movies[0]); //Problem
    else
        column2.appendChild(movies[0]); //Problem

    // Update index
    movieindex = (movieindex + 1) % movies.length;
}

function prev(respective_column) {
    // Get fresh NodeList of current movies
    const movies = document.querySelectorAll('.' + respective_column + ' .box');
    let lastmovie = movies[movies.length-1]
    // Move first movie to end
    if (respective_column === "column1")
        column1.insertBefore(lastmovie, column1.firstChild);
    else
    column2.insertBefore(lastmovie, column2.firstChild); 

    // Update index
    movieindex = (movieindex + 1) % movies.length;
}


// ===========================================================
// show FAQs Answer ================================
document.querySelectorAll(".faqs").forEach(button => {
    button.addEventListener("click", function () {

        let answer = this.nextElementSibling;
        if (answer.classList.contains('ans')) {
            answer.classList.toggle('active');
            let cross = this.querySelector('.view-detail');

            // rotate the cross symbol
            
            if (cross.style.transform === 'rotate(135deg)') {
                cross.style.transform = 'rotate(0deg)';
            } else {
                cross.style.transform = 'rotate(135deg)';
            }
          
        }

    });
});

// ========================================================





