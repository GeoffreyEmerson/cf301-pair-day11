(function(module) {
  var articlesController = {};

  // DONE: Create the `articles` table when the controller first loads, with
  //       code that was previously in index.html.
  // DONE: Make the function below fetch and render the articles. It should look
  //       very similiar to code you wrote before.
  // TODO: Hide the main section elements; reveal the #articles section:
  articlesController.index = function() {
    Article.createTable(function() {
      Article.fetchAll(articleView.initIndexPage);
    });
    //NOTE: main section elements are already hidden and #articles revealed by routes.js
  };
  module.articlesController = articlesController;
})(window);
articlesController.index();
