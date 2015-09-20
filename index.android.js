'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToastAndroid
  } = React;

var reactAndroidSample = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <Button style={{color: 'green'}} onPress={this._handlePress}>Button</Button>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  },
  _handlePress: function () {
    console.log('_handlePress()');
    ToastAndroid.show('ccc', ToastAndroid.LONG); //SHORT
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

AppRegistry.registerComponent('reactAndroidSample', () => reactAndroidSample);
