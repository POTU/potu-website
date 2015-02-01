var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Title = require('./title.jsx');
var Navigation = require('./navigation.jsx');
var Content = require('./content.jsx');
var ContactInfo = require('./contact-info.jsx');

var Background = React.createClass({
    render: function() {
        return (<div id="background">
            <Title />
            <Navigation />
            <Content>
                <RouteHandler />
            </Content>
            <ContactInfo />
        </div>);
    }
});

module.exports = Background;
