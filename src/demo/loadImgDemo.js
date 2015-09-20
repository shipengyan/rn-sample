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
    //this.getImages();
    this.getImages2();
  },

  getImages2: function () {
    setTimeout((function () {
      var urls = ['http://pic25.nipic.com/20121209/9252150_194258033000_2.jpg']; //just for test

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(urls),
        loaded: true
      });
    }).bind(this), 4000);
  },
  getImages: function () {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      //if (request.status === 200) {
      //  var urls = [];
      //  var data = JSON.parse(request.responseText).data;
      //  for (var i = 0; i < data.length; ++i) {
      //    if (!data[i].animated) {
      //      var url = data[i].link;
      //      var lastDotPos = url.lastIndexOf('.');
      //      urls.push(url.substring(0, lastDotPos) + 'm' + url.substring(lastDotPos, url.length));
      //    }
      //  }
      //
      //  this.setState({
      //    dataSource: this.state.dataSource.cloneWithRows(urls),
      //    loaded: true
      //  });
      //}
      console.log(request.status);
      var urls = ['http://pic25.nipic.com/20121209/9252150_194258033000_2.jpg']; //just for test

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(urls),
        loaded: true
      });

    };
    request.open('GET', 'http://pic25.nipic.com/20121209/9252150_194258033000_2.jpg');
    request.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36");
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

module.exports = ImgurGallery;