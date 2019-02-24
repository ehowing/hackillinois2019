import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';
import {Header, Button} from 'react-native-elements';
import {} from 'react-navigation';

export default class DisplayScreen extends React.Component {
  static navigationOptions = {
  }
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  componentDidMount() {
    const {navigation} = this.props;
    this.setState({categories: navigation.getParam('categories', 'default')})

  }
  render() {
    return (
      <View>
      <Header
        backgroundColor='#49ebba'
        leftComponent={{text:this.state.reference}}
        rightComponent={{text:"Comment", onPress: () => this.props.navigation.navigate('AddComment')}}
      />
        <Text>{this.state.categories.val()}</Text>
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
