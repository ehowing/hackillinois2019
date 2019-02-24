import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Header, Button} from 'react-native-elements';
import {} from 'react-navigation';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
  }
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }
  render() {
    return (
      <View style={{flex:1}}>
      <Header
        backgroundColor='#49ebba'
        leftComponent={{text:this.state.reference}}
        centerComponent={{ text:"Hack your Bible Study!", style:{fontSize:20,color:'#3c0bc4',fontWeight:'bold'}}}
      />
      <View style={styles.container}>
        <TextInput
          ref={input => {this.textInput = input}}
          multiline={true}
          placeholder="What's your name?"
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <Button
          small
          backgroundColor= '#49ebba'
          title='Start Reading!'
          onPress={() => this.props.navigation.navigate('Passage', {name:this.state.name})}
        />
        <Text>{this.state.name}</Text>
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
