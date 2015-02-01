var React = require('react');
var Grid = require('react-bootstrap/Grid');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');
var Router = require('react-router');
var Link = Router.Link;

var Navigation = React.createClass({
    render: function() {
        return (<div>
            <Grid className="navigation">
                <Row>
                    <Col><Link to="teams">Teams</Link></Col>
                    <Col><Link to="games">Games</Link></Col>
                    <Col><Link to="agenda">Agenda</Link></Col>
                </Row>
            </Grid>
        </div>);
    }
});

module.exports = Navigation;
