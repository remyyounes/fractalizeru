var React = require("react");
var Page = require("./components/Page");
/*
Fractilizeru:
Page
  -> Nav
  -> Content
    -> Composer
      -> Segment Composer
      -> Shape Composer
    -> Fractal Generator
*/
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
