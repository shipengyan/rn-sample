'use strict';

var React = require('react-native');
//var {Router} = require('react-native-routes');
var {Router, RouterHandler} = require('./src/frm/router');
var Button = require('react-native-button');

var { AppRegistry,  StyleSheet, BackAndroid  } = React;


var IndexPage = require('./src/index');


var firstRoute = {
  name: 'Home',
  component: IndexPage
};

var reactAndroidSample = React.createClass({
  displayName: 'ReactAndroidSample',

  componentDidMount: function () {
    console.log('componentDidMount()');

    var self = this;
    //it does not work now.
    BackAndroid.addEventListener('hardwareBackPress', function () {
      console.log('back press event.');

      //if (!this.onMainScreen()) {
      //  this.goBack();
      //  return true;
      //}
      return false;
    });
  },

  componentWillUnmount: function () {
    console.log('componentDidMount()');
    BackAndroid.removeEventListener('hardwareBackPress');
  },

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
