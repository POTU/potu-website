var React = require('react');

var Agenda = React.createClass({
    render: function () {
        return (<div>
            <h2>Agenda</h2>
            <p>The idea of POTU is to get local game teams together once every 2 - 3 months, have an awesome game jam and produce a releasable game. Its all about learning from each other, growing together and having fun!</p>
            <p>All of the games we have developed are available open source. Check out our <a href="https://github.com/POTU" className="dl-link">Github</a>.</p>
        </div>);
    }
});

module.exports = Agenda;
