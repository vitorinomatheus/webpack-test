#webpack-test

This project's goal is to create a bakery website model, including a home page, a menu page and a contact page. The method of implementation is to create all page's DOM by bundling JavaScript's modules with webpack.


1 - webpack config is using two entries and two outputs, for now the HTML file is linked to 'pageLoad.bundle.js' module;

2 - pageLoad is importing some text variables from 'textsrc.js' and its goal is to create the DOM structure for the home page
