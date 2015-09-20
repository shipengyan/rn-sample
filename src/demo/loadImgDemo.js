/**
 * Created by shi.pengyan on 2015/9/20.
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
  } = React;

var ImgurGallery = React.createClass({
  getInitialState: function () {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false
    };
  },

  componentDidMount: function () {
    this.getImages();
  },

  getImages: function () {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        var urls = [];
        var data = JSON.parse(request.responseText).data;
        for (var i = 0; i < data.length; ++i) {
          if (!data[i].animated) {
            var url = data[i].link;
            var lastDotPos = url.lastIndexOf('.');
            urls.push(url.substring(0, lastDotPos) + 'm' + url.substring(lastDotPos, url.length));
          }
        }

        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(urls),
          loaded: true
        });
      }
    };
    request.open('GET', 'https://api.imgur.com/3/gallery/r/aww/top/0');
    request.setRequestHeader("Authorization", "Client-ID 5d406542be855a3")
    request.send();
  },

  render: function () {
    if (!this.state.loaded) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderImage}
        contentContainerStyle={styles.listView}
        />
    );
  },

  renderImage: function (imageURL) {
    return (
      <TouchableHighlight underlayColor='rgba(0,0,0,0)'>
        <View>
          <Image
            source={{uri: imageURL}}
            style={styles.thumbnail}
            />
        </View>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  thumbnail: {
    width: 72,
    height: 72,
    margin: 8
  },
  listView: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

AppRegistry.registerComponent('Test', () => ImgurGallery);