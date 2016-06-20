(function (module) {
// DONE: Configure our two routes for this app with page.js, by registering each URL your app can handle,
// linked to a a single controller function to handle it:

// DONE: What function do we call to activate page.js? Call it to run that code right here.

// If you did the prework for today, you should be able to refer to your sandbox app for these TODOs.

  console.log('routes.js loaded'); // Debug -- verify this in the console when the page (re)loads.

  // page(...
  page.base('');

  page('/', index);
  page('/about', aboutController.index);
  page('*', notFound);
  page();

  function index() {
    showSection('articles');
  }

  function about() {
    showSection('about');
  }

  function notFound() {
    showSection('notFound'); // not made yet
  }

  function showSection(tag) {
    $('.tab-content').hide();
    $('#' + tag).show();
  }
})(window);
