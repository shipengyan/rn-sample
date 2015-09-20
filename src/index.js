/**
 * Created by shi.pengyan on 2015/9/20.
 */
'use strict';

var React = require('react-native');
var Button = require('react-native-button');

var {ScrollView} = React;

var loadImgDemoPage = require('./demo/loadImgDemo');

var Index = React.createClass({

  getInitialState: function () {
    return {}
  },

  render: function () {

    return (
      <ScrollView>
        <Button onPress={this._goPage.bind(this,'LOAD_IMG')}>Load Img</Button>
      </ScrollView>
    );
  },

  _goPage: function (page) {
    var router;
    switch (page) {
      case 'LOAD_IMG':
        router = {name: page, component: loadImgDemoPage};
        break;
    }

    if (!router) {
      console.log('router is null, so return');
      return;
    }
    this.props.goForward(router);
  }
});

module.exports = Index;