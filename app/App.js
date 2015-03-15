var React = require("react");
var Page = require("./components/Page");

var App = React.createClass({
  render() {
    return (
      <Page/>
    );
  }
});

React.render(
  <App/>,
  document.getElementById("app")
);

module.exports = App;
