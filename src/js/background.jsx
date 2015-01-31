var React = require('react');
var Navigation = require('./navigation.jsx');

var Background = React.createClass({
    render: function() {
        return (<div id="background">
                    <Navigation />
                </div>);
    }
});

module.exports = Background;
