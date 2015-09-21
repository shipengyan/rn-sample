/**
 * Created by shi.pengyan on 2015/9/20.
 */
var React = require('react-native');
var { Navigator, View } = React;

var _routes = {}, currentRouteName;
var RouteHandler = {
  registerRoute: function (route) {
    if (_routes[route.name]) {
      return;
    }
    _routes[route.name] = route;
  },

  getRoute: function (routeName) {
    if (!_routes[routeName]) {
      return;
    }
    return _routes[routeName];
  },

  //返回当前路由名称
  getCurrentRouteName: function () {
    return currentRouteName;
  }
};


var Router = React.createClass({
  getInitialState: function () {
    return {
      route: {
        name: null,
        index: 0
      }
    };
  },

  _handleBack: function (route, navigator) {
    if (this.state.route.index > 0) {
      if (route.configureScene) {
        this.setState({sceneConfig: route.configureScene()});
      }
      navigator.pop();
    }
  },

  _handleForward: function (route, navigator) {
    route.index = this.state.route.index + 1;
    this.state.route.index = route.index;
    if (route.configureScene) {
      this.setState({sceneConfig: route.configureScene()});
    }
    navigator.push(route);
  },

  renderScene: function (route, navigator) {
    currentRouteName = route.name;
    var CustomComponent = route.component;

    var goBackwards = function () {
      this._handleBack(route, navigator);
    }.bind(this);

    var goForward = function (route) {
      this._handleForward(route, navigator);
    }.bind(this);

    var goToFirstRoute = function () {
      navigator.popToTop();
    };

    var property = {
      name: route.name,
      index: route.index,
      data: route.data,
      toBack: goBackwards,
      toRoute: goForward,
      toFirstRoute: goToFirstRoute
    };

    //route property
    return (
      <View style={{flex: 1, paddingTop: 20}} onResponderTerminationRequest={()=>{return true;}}>
        <CustomComponent route={property}/>
      </View>
    )
  },

  render: function () {
    return (
      <Navigator
        initialRoute={this.props.firstRoute}
        renderScene={this.renderScene}
        />
    )
  }
});
module.exports = {Router, RouteHandler};
