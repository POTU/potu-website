var React = require('react');
var Navbar = require('react-bootstrap/Navbar');
var Nav = require('react-bootstrap/Nav');
var NavItem = require('react-bootstrap/NavItem');

var Navigation = React.createClass({
    render: function() {
        return (<div>
            <Navbar>
                <Nav stacked>
                    <NavItem>About</NavItem>
                    <NavItem>Links</NavItem>
                </Nav>
            </Navbar>
        </div>);
    }
});

module.exports = Navigation;
