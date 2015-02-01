var React = require('react');

var NotFound = React.createClass({
    render: function() {
        return (<div>
            <h2>Not Found</h2>
            <p>The requested page does not exist.</p>
        </div>);
    }
});

module.exports = NotFound;
