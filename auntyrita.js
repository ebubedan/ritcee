document.onscroll = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

document.onload = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});



// Function to close the menu when a link is clicked
/*function closeMenu() {
    document.getElementById('menuToggle').checked = false;
  }*/

  document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menuToggle');
    var nav = document.querySelector('nav');

    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            // Checkbox is checked, show the menu
            nav.style.display = 'block';
        } else {
            // Checkbox is unchecked, hide the menu
            nav.style.display = 'none';
        }
    });

    // Close the menu when a navigation link is clicked
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            menuToggle.checked = false;
            nav.style.display = 'none';
        });
    });
});

function closeMenu() {
    document.getElementById('menuToggle').checked = false;
    document.querySelector('nav').style.display = 'none';
}

  
