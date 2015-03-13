var React = require("react");

var App = React.createClass({
  render() {
    return (
      <div>Hello World</div>
    );
  }
});

React.render(
  <App/>,
  document.getElementById("app")
);

module.exports = App;
