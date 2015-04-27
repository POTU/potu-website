var React = require('react');

var Games = React.createClass({
    render: function () {
        return (<div>
            <h2>Games</h2>
            <h3>King Leaf</h3>
            <p>The first game made by POTU is King Leaf. Sven, the king of the leaves, had his throne stolen by the evil Stick of the Sticks. Sven was ripped from his tree and thrown into a river, where he must now try to survive in order to TAKE BACK HIS THRONE!</p>
            <p>King Leaf was made with cocos2d-x.</p>
            <h3>Charcabet</h3>
            <p>Eat letters become ztronger!</p>
            <p>Charcabet was made with Unity. Download here:</p>
            <p><a href="bin/CharcabetWindows.zip" className="dl-link">Windows</a> | <a href="bin/CharcabetMac.zip" className="dl-link">Macintosh</a> | <a href="bin/Charcabet.apk" className="dl-link">Android (.apk)</a></p>
        </div>);
    }
});

module.exports = Games;
