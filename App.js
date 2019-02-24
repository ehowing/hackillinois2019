import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase';

import HomeScreen from './HomeScreen';
import PassageScreen from './PassageScreen';
import CommentsScreen from './CommentsScreen';
import AddCommentScreen from './AddCommentScreen';
import DisplayScreen from './DisplayScreen';


// export default class App extends React.Component {
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <BottomTabNavigator/>
//       </View>
//     );
//   }
// }

var config = {
  databaseURL:  "https://biblestudyhack1.firebaseio.com",
  projectId: "biblestudyhack1",
};
firebase.initializeApp(config);

const PassageStack = createStackNavigator({
  Passage: PassageScreen,
  AddComment: AddCommentScreen,
})

const CommentsStack = createStackNavigator({
  Comments: CommentsScreen,
  Display: DisplayScreen
})

const BottomTabNavigator = createBottomTabNavigator(
  {Home: HomeScreen,
  Passage: PassageStack,
  Comments: CommentsStack,
},
{ tabBarOptions:{ labelStyle:{ fontSize:20 } } });


const App = createAppContainer(BottomTabNavigator);
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
