#webpack-test

This project's goal is to create a bakery website model, including a home page, a menu page and a contact page. The method of implementation is to create all page's DOM by bundling JavaScript's modules with webpack.


1 - webpack config is using two entries and two outputs, for now the HTML file is linked to 'pageLoad.bundle.js' module;

2 - pageLoad.js, menu.js and contact.js are importing some text variables from 'textsrc.js' (aiming at cleaner code) and their goal is to create the DOM structure for their respective pages;

3 - index.js imports the main functions from each page loader script, calls the header loader function and the home page loader at first, then adds event listeners to each button calling thier respective page loaders;

4 - I used import/export logic to images and the style sheet as well
