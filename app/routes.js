/**
 * The Router maps local urls to controller and action pairs. This is used primarily 
 * for providing history support without reloading the page. Example usage:
 * 
 * Connects http://myapp.com/#home to the index controller's overview action
 * map.connect("home", {controller: 'index', action: 'overview'});
 * 
 * Connects urls like "images/myImage.jpg" to the images controller's show action, passing
 * "myImage.jpg" as the "url" property of the options object each controller action receives
 * map.connect("images/:url", {controller: 'images', action: 'show'});
 */
Ext.Router.draw(function(map) {
  
  // Implement navigation controller behavior for pushing interactions onto
  // and popping them from a (controller, action) stack with animations.
  map.connect('navigation/push/:_controller/:_action', {
    controller: 'navigation',
    action: 'push'
  });
  
  map.connect('navigation/pop', {
    controller: 'navigation',
    action: 'pop'
  });
  
  // Provide default routing behavior, mapping '#controller/action' URL hashes.
  // A '#root/index' route will dispatch the 'root' controllers 'index' action.
  map.connect(':controller/:action');
  map.connect(':controller/:action/:id');
  
});