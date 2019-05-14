const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let middle = document.getElementById('middle-img');
middle.setAttribute('src', siteContent['main-content']['middle-img-src']);

let logoImg = document.getElementById('cta-img');
logoImg.src = '../img/header-img.png';

let nav = document.querySelectorAll('header nav a');
let navHead = document.querySelector('nav');

nav.forEach(function(element, i) {
  element.textContent = siteContent.nav[`nav-item-${i + 1}`];
  element.style.color = 'green';
});
let thing1 = document.createElement('a');
let thing2 = document.createElement('a');

thing1.textContent = 'Name';
thing2.textContent = 'Number';
navHead.appendChild(thing1).style.color = 'green';
navHead.appendChild(thing2).style.color = 'green';

let headingDom = document.querySelector('.cta .cta-text h1');
headingDom.textContent = 'DOM is awesome';

let btn = document.querySelector('.cta .cta-text button');
btn.textContent = 'Get Started';

// let titles = document.querySelectorAll('.top-content .text-content h4');
// let paragraph = document.querySelectorAll('.top-content .text-content p');
// let block = document.querySelectorAll('.top-content .text-content');

// block.forEach(function(element) {
//   titles.textContent = siteContent['main-content'][`${this}-h4`];
//   paragraph.textContent = siteContent['main-content'][`${this}-content`];
// });

let title = document.querySelectorAll('h4');
let paragraph = document.querySelectorAll('p');

title[0].textContent = siteContent['main-content']['features-h4'];
title[1].textContent = siteContent['main-content']['about-h4'];
title[2].textContent = siteContent['main-content']['services-h4'];
title[3].textContent = siteContent['main-content']['product-h4'];
title[4].textContent = siteContent['main-content']['vision-h4'];
title[5].textContent = siteContent['contact']['contact-h4'];

paragraph[0].textContent = siteContent['main-content']['features-content'];
paragraph[1].textContent = siteContent['main-content']['about-content'];
paragraph[2].textContent = siteContent['main-content']['services-content'];
paragraph[3].textContent = siteContent['main-content']['product-content'];
paragraph[4].textContent = siteContent['main-content']['vision-content'];

let footP = document.querySelectorAll('.contact p');
footP[0].textContent = siteContent['contact']['address'];
footP[1].textContent = siteContent['contact']['phone'];
footP[2].textContent = siteContent['contact']['email'];

let last = document.querySelector('footer p');
last.textContent = siteContent.footer.copyright;
// titles.textContent = siteContent['main-content']['features-h4'];
// paragraph.textContent = siteContent['main-content']['features-content'];

// let title2 = document.querySelector('.top-content .text-content h4');
// let paragraph2 = document.querySelector('.top-content .text-content p');
// title2.textContent = siteContent['main-content']['about-h4'];
// paragraph2.textContent = siteContent['main-content']['about-content'];
