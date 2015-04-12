var React = require('react');

var Teams = React.createClass({
    render: function () {
        return (<div>
            <h2>Teams</h2>
            <h3><a href="http://www.fakefish.fi/" className="team">FakeFish</a></h3>
            <p>And you thought our games looked good - take a look at our team: its diamond.</p>
            <h3><a href="http://jalomieli.com/" className="team">Jalomieli</a></h3>
            <p>We create traditional computer games.</p>
            <h3><a href="http://rockodilegames.com/" className="team">Rockodile</a></h3>
            <p>We bring the multiplayer experience into your pocket.</p>
        </div>);
    }
});

module.exports = Teams;
