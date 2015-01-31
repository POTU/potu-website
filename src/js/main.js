var React = require('react');
var Navigation = require('./navigation.jsx');

(function(window) {
    var root = window.document.createElement("div");
    root.id = "root";
    window.document.body.appendChild(root);
    React.render(<Navigation />, root);
})(window);
