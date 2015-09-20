'use strict';

var React = require('react-native');
var {Router} = require('react-native-routes');
var Button = require('react-native-button');

var { AppRegistry,  StyleSheet  } = React;


var IndexPage = require('./src/index');


var firstRoute = {
  name: 'Home',
  component: IndexPage
};

var reactAndroidSample = React.createClass({

  render: function () {
    return (
      <Router firstRoute={firstRoute}/>
    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('reactAndroidSample', () => reactAndroidSample);
