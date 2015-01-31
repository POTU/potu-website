var React = require('react');
var Background = require('./background.jsx');
var Navigation = require('./navigation.jsx');

(function(window) {
    var root = window.document.createElement("div");
    root.id = "root";
    window.document.body.appendChild(root);
    React.render(<Background />, root);
})(window);
