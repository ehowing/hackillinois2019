import React from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import {} from 'react-navigation';
import { Header } from 'react-native-elements';

export default class PassageScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      passage: '',
      reference: '',
      name: '',
    }
  }

  componentDidMount() {
    const {navigation} = this.props;
    return fetch('https://bible-api.com/james+1')
      .then( (response) => response.json())
      .then( (responseJson) => {
        this.setState({
          isLoading: false,
          passage: responseJson.text,
          reference: responseJson.reference
        });
      })
    .catch((error) => {
      console.log(error)
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={{flex:1, fontSize:30}}>
        <Header
          backgroundColor='#49ebba'
          leftComponent={{text:this.state.reference, style:{fontSize:15,color:'#3c0bc4',fontWeight:'bold'}}}
          rightComponent={{text:"Comment", style:{fontSize:15,color:'#3c0bc4',fontWeight:'bold'},onPress: () => this.props.navigation.navigate('AddComment') }}
        />
        <View style={{paddingLeft:20, paddingRight:20,paddingBottom:100}}>
        <ScrollView style={{paddingVertical:20, }}>

          <Text style={{fontSize:20}}>{this.state.passage}</Text>
        </ScrollView>
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
  }
});
