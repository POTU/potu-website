var React = require('react');
var Grid = require('react-bootstrap/Grid');
var Row = require('react-bootstrap/Row');
var Col = require('react-bootstrap/Col');

var Navigation = React.createClass({
    render: function() {
        return (<div>
            <Grid className="navigation">
                <Row>
                    <Col>Teams</Col>
                    <Col>Games</Col>
                    <Col>Agenda</Col>
                </Row>
            </Grid>
        </div>);
    }
});

module.exports = Navigation;
