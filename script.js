/* find button by its is*/
const themeToggle = document.querySelector('#theme-toggle')

/* listen for a click */

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? '\u2600\uFE0F' : '\uD83C\udf19';

});

/*==================back to top button ==================*/
const toTop = document.querySelector("#to-top");

/* listen for scrolling */

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        toTop.classList.add('show');
    }
    else {
        toTop.classList.remove('show');
    }
});

/* listen for a click on the button itself */
toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

});


/* == scroll reveal == */

// find every element that has class reveal 

const revealItems = document.querySelectorAll('.reveal');

//intersectionObserver watches elements and tell us when they enter the screen , fat mor smoother than scroll event 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // when an element scrolls into view 
        if (entry.isIntersecting) {
            // change : add class that fades + slides it in
            entry.target.classList.add('is-visible');
            // stop watching it - it only needs to animate once
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15 // fire when 15% of the element is visible
});


// tell the observer to watch all reveal elements
revealItems.forEach((Item) => observer.observe(Item));

