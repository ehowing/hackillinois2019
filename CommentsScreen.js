import React from 'react';
import { Modal, ScrollView, FlatList, StyleSheet, Text, View } from 'react-native';
import {} from 'react-navigation';
import {Header, ListItem, Button} from 'react-native-elements';
import firebase from 'firebase';


export default class CommentsScreen extends React.Component {
  static navigationOptions = {
    header:null
  }

  constructor(props) {
    super(props);
    this.state = {
      data: ["hello there"],
      modalVisible: false,
    }
  }
  readUserData = () => {
    const ref = firebase.database().ref('/groups/group1/comments/');
    ref.once('value').then((snapshot) => {
      this.setState({categories: snapshot.toJSON().comment1.text}, () => {console.log(this.state.categories)})
    })
}
    // firebase.database().ref('/groups/group1/comments/').once('value', function (snapshot) {
        //var items = snapshot.val();
//        console.log(snapshot.val());

        // this.setState({categories:snapshot.val()});
        // var returnArr = [];
        //
        // // snapshot.forEach(function(childSnapshot){
        // //   //var item = {verse_id: childSnapshot.verse_id, user_id: childSnapshot.user_id, comment:childSnapshot.text};
        // //   var item =  childSnapshot.text;
        // //   returnArr.push(item);
        // //   console.log(item);
        // // });

// });
  setModalVisible = () => {
    this.setState({modalVisible:true})
  }
  setModalInvisible = () => {
    this.setState({modalVisible:false})
  }


parseData = () => {
  var returnArr = [];
  var snap = this.state.categories;
  snap.forEach(function(childSnapshot){
    //var item = {verse_id: childSnapshot.verse_id, user_id: childSnapshot.user_id, comment:childSnapshot.text};
    var item =  {user_id:childSnapshot.val().user_id, verse_id:childSnapshot.val().verse_id, text:childSnapshot.val().text};
    returnArr.push(item);
  });

  console.log(returnArr)
}

componentDidMount() {
  console.log("entered mount");
  this.readUserData();
};




  render() {

    return (
      <View>
        <Modal
          visible={this.state.modalVisible}
          onRequestClose={this.setState.setModalInvisible}>
          <View style={styles.container}>
            <Text>{this.state.categories}</Text>
            <Button
              small
              backgroundColor= '#49ebba'
              title='Close'
              onPress={this.setModalInvisible}
              />
          </View>
        </Modal>
        <View>
        <Header
          backgroundColor='#49ebba' 
        />
        <Button
          small
          backgroundColor= '#49ebba'
          title='Get Comments'
          onPress={this.setModalVisible}
          />
        </View>
        </View>
    );
  }
}

// <ScrollView>
//   <FlatList
//     data={this.state.data}
//     keyExtractor={(item,index) => index.toString()}
//     renderItem={({item}) => <Text>{item}</Text>}
//   />
// </ScrollView>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
