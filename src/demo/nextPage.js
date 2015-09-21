/**
 * Created by shi.pengyan on 2015/9/21.
 */
var React = require('react-native');

var {Text, BackAndroid}= React;

var TextView = React.createClass({

  componentDidMount: function () {
    var self = this;
    //it does not work now.
    BackAndroid.addEventListener('hardwareBackPress', function () {
      console.log('back press event.');

      self.props.route.toBack();

      return true;
    });

  },

  render: function () {

    return (
      <Text>this is second page</Text>
    );
  }

});


module.exports = TextView;