import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import BookDonate from "./Screen/BookDonate"
import Return from "./Screen/Return"
import Welcome from "./Screen/Welcome"
import {createSwitchNavigator,createAppContainer} from "react-navigation"
export default class App extends React.Component {
  render() {
    return (
      
       <AppContainer/>
         
      
      
    );
  }
}
const BottomNavigator = createBottomTabNavigator({
  BookDonation:{screen: BookDonate},
  Return:{screen: Return}
});
const SwitchNavigator = createSwitchNavigator({
  Welcome:{screen: Welcome},
  TabNavigator:{screen: BottomNavigator}
});
const AppContainer=createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
