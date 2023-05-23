function logic () {
    // Initialize objects needed for buttons logic
    const settingsBtn = document.querySelector('.settings');
    const fullBtn = document.getElementById('fullscreen');
    const inspButton = document.querySelector('.inspector');
    const setDropdown = document.getElementById('settings-dropdown');
    const inspDropdown = document.getElementById('inspector-dropdown');
    const viewerCont = document.getElementById('viewer');
    const canvasCont = document.getElementById('kvas');
    const btnImage = document.querySelector('.full');
    const pgTwo = document.getElementById('page-two');
    const texturesBtn = document.getElementById('textures');
    const texturesDropdown = document.getElementById('textures-list');
    const navigationBtn = document.getElementById('navigation');
    const navigationDropdown = document.getElementById('navigation-list');

    setDropdown.style.display = 'none';
    // When options clicked
    settingsBtn.addEventListener('click', function () {
        // If menu not displayed, display it
        if (setDropdown.style.display === 'none') {
            setDropdown.style.display = 'block';
            inspDropdown.style.display = 'none';
            // If displayed, close menu
        } else {
            setDropdown.style.display = 'none';
        }
    });

    inspDropdown.style.display = 'none';
    // When inspector clicked
    inspButton.addEventListener('click', function () {
        if (inspDropdown.style.display === 'none') {
            inspDropdown.style.display = 'block';
            setDropdown.style.display = 'none'
        } else {
            inspDropdown.style.display = 'none';
        }
    });

    viewerCont.style.height = '64%';
    viewerCont.style.width = '52%';
    // When fullscreen clicked
    fullBtn.addEventListener('click', function () {
        // If viewer not in full screen scale it
        if (viewerCont.style.height === '64%' && viewerCont.style.width === '52%') {
            pgTwo.requestFullscreen();
            viewerCont.style.height = '100%';
            viewerCont.style.width = '100%';
            canvasCont.style.height = '100%';
            canvasCont.style.width = '100%';
            viewerCont.style.borderRadius = '0px';
            canvasCont.style.borderRadius = '0px';
            btnImage.src = 'ScreenDownsize.svg';
            inspDropdown.style.display = 'none';
            setDropdown.style.display = 'none';
            // Resize back to normal
        } else {
            document.exitFullscreen();
            viewerCont.style.height = '64%';
            viewerCont.style.width = '52%';
            canvasCont.style.height = '64%';
            canvasCont.style.width = '52%';
            viewerCont.style.borderRadius = '10px';
            canvasCont.style.borderRadius = '10px'
            btnImage.src = 'Fullscreen.svg';
            inspDropdown.style.display = 'none';
            setDropdown.style.display = 'none';
        }
    });

    texturesDropdown.style.display = 'none';
    // When textures button clicked
    texturesBtn.addEventListener('click', function () {
        // If textures list not displayed, display
        if (texturesDropdown.style.display === 'none') {
            texturesDropdown.style.display = 'block';
        } else {
            texturesDropdown.style.display = 'none';
        }
    });
    navigationDropdown.style.display = 'none';
    // When navigation button clicked
    navigationBtn.addEventListener('click', function () {
        // If navigation list not displayed, display
        if (navigationDropdown.style.display === 'none') {
            navigationDropdown.style.display = 'block';
        } else {
            navigationDropdown.style.display = 'none';
        }
    });

    // When scrolling page, make menu dynamic
    window.addEventListener('scroll', function() {
        // Initialize objects needed
        const navMenu = document.querySelector('.nav-menu');
        const pageOne = document.querySelector('.page-one');
        const navPot = document.querySelector('.utahpot');
        const navIntr = document.querySelector(".intr");
        const navAbt = document.querySelector(".abt");
        const navVwr = document.querySelector(".vwr");
        const scrollPosition = window.scrollY;
        // If we are after the introduction pages
        if (scrollPosition >= pageOne.offsetHeight * 4) {
            navMenu.style.display = 'flex';
            navMenu.style.position = 'fixed';
            // If we are after the introduction pages but before viewer page
            if (scrollPosition >= pageOne.offsetHeight * 4 && scrollPosition < pageOne.offsetHeight * 6) {
                navPot.style.color = 'black';
                navIntr.style.color = 'black';
                navAbt.style.color = 'black';
                navVwr.style.color = 'black';
                navMenu.style.borderColor = 'black';
            // If we are at the viewer page, change color of menu
            } else {
                navPot.style.color = 'white';
                navIntr.style.color = 'white';
                navAbt.style.color = 'white';
                navVwr.style.color = 'white';
                navMenu.style.borderColor = '#D5D5D5';
            }
        // If we are at introduction hide menu
        } else {
            navMenu.style.display = 'none';
            navMenu.style.position = 'relative';
        }
    });

    // If element is in viewport, add class with animation
    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                // Unobserve element
                observer.unobserve(entry.target);
            }
        });
    }

    // Parameters for observation
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    // Define the observer and elements to observe
    const observer = new IntersectionObserver(handleIntersection, options);
    const elements = document.querySelectorAll(".intro p");

    elements.forEach((element) => {
        observer.observe(element);
    });
}

window.onload = logic;