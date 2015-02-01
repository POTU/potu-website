var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Background = require('./background.jsx');
var Teams = require('./views/teams.jsx');
var Games = require('./views/games.jsx');
var Agenda = require('./views/agenda.jsx');
var NotFound = React.createClass({render: function() {return <br />;}});

(function(window) {
    var root = window.document.getElementById("root");
    
    var routes = (
        <Route name="background" handler={Background} path="/">
            <DefaultRoute handler={Background} />
            <Route name="teams" handler={Teams} />
            <Route name="games" handler={Games} />
            <Route name="agenda" handler={Agenda} />
            <NotFoundRoute handler={NotFound} />
        </Route>
    );

    Router.run(routes, function(Handler) {
        React.render(<Handler />, root);
    });
})(window);
