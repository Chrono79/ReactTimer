var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function () {
    totalDeciSeconds: 0
  },
  propTypes: {
    totalDeciSeconds: React.PropTypes.number
  },
  formatSeconds: function (totalDeciSeconds) {
    var deciSeconds = totalDeciSeconds % 10;
    var seconds = Math.floor(totalDeciSeconds / 10) % 60;
    var minutes = Math.floor(totalDeciSeconds / 600);

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds + '.' + deciSeconds;
  },
  render: function () {
    var {totalDeciSeconds} = this.props;

    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalDeciSeconds)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;
