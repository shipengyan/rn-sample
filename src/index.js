/**
 * Created by shi.pengyan on 2015/9/20.
 */
'use strict';

var React = require('react-native');
var Button = require('react-native-button');

var {View, ScrollView, BackAndroid, Text} = React;

var loadImgDemoPage = require('./demo/loadImgDemo');
var nextPage = require('./demo/nextPage');

var Index = React.createClass({

  displayName: 'IndexPage',

  getInitialState: function () {
    return {}
  },

  render: function () {

    return (
      <View>
        <Button onPress={this._goPage.bind(this,'LOAD_IMG')}>Load Img</Button>
        <Text onPress={this._goPage.bind(this,'TEXT_PAGE')}>Text Page</Text>
      </View>
    );
  },

  _goPage: function (page) {
    var component, router;
    switch (page) {
      case 'LOAD_IMG':
        component = loadImgDemoPage;
        break;

      case 'TEXT_PAGE':
        component = nextPage;
        break;
    }

    if (!component) {
      console.log('router is null, so return');
      return;
    }
    router = {name: page, component: component};
    this.props.route.toRoute(router);
  }
});

module.exports = Index;