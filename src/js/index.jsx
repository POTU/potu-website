var React = require('react');

var HelloMessage = React.createClass({
    render: function() {
        return (<div>Hello world</div>);
    }
});
    
module.exports = function(root) { React.render(<HelloMessage />, root); };
