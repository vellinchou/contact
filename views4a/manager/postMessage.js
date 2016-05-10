
var React = require('react-native');
var Service = require('./../service');
var Util = require('./../util');

var {
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Alert,
  AsyncStorage
  } = React;

var PostMessage = React.createClass({

  render: function(){
    return (
      <ScrollView   style={{paddingTop:30, marginTop:50}}>
        <View>
          <TextInput multiline={true}
                     onChangeText={this._onChange}
                     style={styles.textinput}
                     placeholder="请输入公告内容"/>
        </View>
        <View style={{marginTop:20}}>
          <TouchableOpacity onPress={this._postMessage}>
            <View style={styles.btn}>
              <Text style={{color:'#fff'}}>发布公告</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  },

  _onChange: function(val){
    if(val){
      this.setState({
        message: val
      });
    }
  },

  _postMessage: function(){
    var that = this;
    AsyncStorage.getItem('token', function(err, token){
      if(err){
        Alert.alert('提示','权限失效，请退出APP，重新登录!');
      }else{
        Util.post(Service.host + Service.addMessage, {
          token: token,
          message: that.state.message
        }, function(data){
          if(data.status){
            Alert.alert('提示','添加成功！');
          }else{
            Alert.alert('提示','添加失败！');
          }
        });
      }

    });
  }

});

var styles = StyleSheet.create({
  textinput:{
    flex:1,
    height:100,
    borderWidth:1,
    borderColor:'#ddd',
    marginTop:30,
    marginLeft:20,
    marginRight:20,
    paddingLeft:8,
    fontSize:13,
    borderRadius:4
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1DB8FF',
    height:38,
    marginLeft:20,
    marginRight:20,
    borderRadius:4,
  }
});

module.exports = PostMessage;