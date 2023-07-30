window.onload = () => {
    // Initialise lax.js library for parallax animations
    lax.init();

    lax.addDriver('scrollY', () => {
        return window.scrollY
    });

    const fullscreenImage = document.querySelector('.full');
    const pageOne = document.querySelector('.page-one');
    const pageTwo = document.getElementById('page-two');
    const viewerContainer = document.getElementById('viewer');

    $('.help, #help-ok').click(() => {
            if ($('.help-popup').css('display') === 'block') {
                $('.help-popup').hide();
            } else {
                $('.help-popup').show();
        }
    });

    $('#viewer, #kvas').css('height', '64vh');
    $('#viewer, #kvas').css('width', '52vw');
    // On fullscreen click
    $('#fullscreen').click(() => {
        // Scale to fullscreen
        if (viewerContainer.style.height === '64vh' && viewerContainer.style.width === '52vw') {
            pageTwo.requestFullscreen();
            $('#viewer, #kvas').css('height', '100vh');
            $('#viewer, #kvas').css('width', '100vw');
            $('#viewer, #kvas').css('border-radius', '0px');
            fullscreenImage.src = 'ScreenDownsize.svg';
            // Resize back to normal
        } else {
            document.exitFullscreen();
            $('#viewer, #kvas').css('height', '64vh');
            $('#viewer, #kvas').css('width', '52vw');
            $('#viewer, #kvas').css('border-radius', '10px');
            fullscreenImage.src = 'Fullscreen.svg';
        }
    });

    $('.nav-div').hide();
    // Navigation menu behaviour when scrolling page
    window.addEventListener('scroll', () => {
        // Initialize objects needed
        const scrollPosition = window.scrollY;
        // Show after intro
        if (scrollPosition >= pageOne.offsetHeight * 4) {
            $('.nav-div').show();
            // Style for about page
            if (scrollPosition >= pageOne.offsetHeight * 4 && scrollPosition < pageOne.offsetHeight * 6) {
                $('.menu-links, #menu-name').css('color', 'black');
                $('.nav-div').css('border-color','black');
                // Style for viewer page
            } else {
                $('.menu-links, #menu-name').css('color', 'white');
                $('.nav-div').css('border-color','white');
            }
            // Hide on intro
        } else {
            $('.nav-div').hide();
        }
    });
}
