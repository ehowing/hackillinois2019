import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Picker } from 'react-native';
import {Header, Button} from 'react-native-elements';
import {} from 'react-navigation';
import firebase from 'firebase';

import App from './App';

export default class AddCommentScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      book: '',
      chapter: '',
      verse_num: 0,
    }
  }

  addCommentToDatabase = () => {
    let text = this.state.text;
    let user_id = "user_id2";
    let verse_id = "JAS+1:" + this.state.verse_num;
      firebase.database().ref('/groups/group1/comments/').push({
          text,
          user_id,
          verse_id
      }).then((data)=>{
          console.log('data ', data)
      }).catch((error)=>{
        console.log('error ', error)
      })
      // TODO: push to database

  }

  render() {
    return (
      <View style={styles.container}>
      <Header
        backgroundColor='#49ebba'
        leftComponent={{text:this.state.reference}}
        rightComponent={{text:"Comment", onPress: () => this.props.navigation.navigate('AddComment')}}
      />
        <View style={{flex:1, flexDirection:'row'}}>
          <Picker style={{height:100, width:100}} selectedValue = {this.state.book} onValueChange = {(itemValue, itemIndex) => this.setState({book: itemValue})}>
            <Picker.Item label = "James" value = "JAS"/>
          </Picker>
          <Picker style={{height:100, width:100}} selectedValue = {this.state.chapter} onValueChange = {(itemValue, itemIndex) => this.setState({chapter: itemValue})}>
            <Picker.Item label = "1" value = "1" />
          </Picker>
          <Picker style={{height:100, width:100}} selectedValue = {this.state.verse_num} onValueChange = {(itemValue, itemIndex) => this.setState({verse_num: itemValue})}>
            <Picker.Item label = "1" value = "1"/>
            <Picker.Item label = "2" value = "2"/>
            <Picker.Item label = "3" value = "3"/>
            <Picker.Item label = "4" value = "4"/>
            <Picker.Item label = "5" value = "5"/>
            <Picker.Item label = "6" value = "6"/>
            <Picker.Item label = "7" value = "7"/>
            <Picker.Item label = "8" value = "8"/>
            <Picker.Item label = "9" value = "9"/>
            <Picker.Item label = "10" value = "10"/>
            <Picker.Item label = "11" value = "11"/>
            <Picker.Item label = "12" value = "12"/>
            <Picker.Item label = "13" value = "13"/>
            <Picker.Item label = "14" value = "14"/>
            <Picker.Item label = "15" value = "15"/>
            <Picker.Item label = "16" value = "16"/>
            <Picker.Item label = "17" value = "17"/>
            <Picker.Item label = "18" value = "18"/>
            <Picker.Item label = "19" value = "19"/>
            <Picker.Item label = "20" value = "20"/>
            <Picker.Item label = "21" value = "21"/>
            <Picker.Item label = "22" value = "22"/>
            <Picker.Item label = "23" value = "23"/>
            <Picker.Item label = "24" value = "24"/>
            <Picker.Item label = "25" value = "25"/>
            <Picker.Item label = "26" value = "26"/>
            <Picker.Item label = "27" value = "27"/>
            <Picker.Item label = "28" value = "28"/>
            <Picker.Item label = "29" value = "29"/>
          </Picker>
        </View>
        <View>
          <TextInput
            ref={input => {this.textInput = input}}
            multiline={true}
            placeholder="What's your comment?"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <View>
          <Button
            small
            backgroundColor= '#49ebba'
            title='Add Comment'
            onPress={this.addCommentToDatabase}
          />
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
