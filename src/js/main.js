var React = require('react');
var Background = require('./background.jsx');

(function(window) {
    var root = window.document.getElementById("root");
    React.render(<Background />, root);
})(window);
