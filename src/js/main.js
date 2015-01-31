var index = require('./index.jsx');

(function(window) {
    var root = window.document.createElement("div");
    root.id = "root";
    window.document.body.appendChild(root);
    index(root);
})(window);
