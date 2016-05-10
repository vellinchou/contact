

var React = require('react-native');
var webview = require('./about/webview');

var {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} = React;


var About = React.createClass({

  render: function(){
    return (
      <View style={styles.container}>

        <View style={styles.wrapper}>
          <Image style={styles.avatar} source={require('image!me_1')}></Image>
          <Text style={{fontSize:14, marginTop:10, color:'#ABABAB'}}>资金管理产品部汽车金融产品</Text>
          <Text style={{fontSize:14, marginBottom:20, color:'#ABABAB'}}>Version: v0.0.1</Text>

          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={this._openWebView.bind(this, 'https://github.com/facebook/react-native')}>
              <Image style={styles.img} source={require('image!github')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={this._openWebView.bind(this, 'http://weibo.com/')}>
              <Image style={[styles.img, {width:25,height:25}]} source={require('image!weibo')}/>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  },

  _openWebView: function(url){
    this.props.navigator.push({
             title:'项目地址',
             name: 'webview',
             data: url

           });
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
  },
  wrapper:{
    alignItems:'center',
    marginTop:50,
  },
  avatar:{
    width:90,
    height:90,
    borderRadius:45,
  },
  img:{
    width:20,
    height:20,
    marginRight:5,
  }
});

module.exports = About;