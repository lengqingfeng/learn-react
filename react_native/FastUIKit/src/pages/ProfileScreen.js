import React, { Component } from "react";
import { View, Text } from "react-native";
export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: "Set",
    headerStyle: {
      backgroundColor: "#1296db"
    },
    headerTintColor: "#fff"
  };
  render() {
    return (
      <View>
        <Text>Set</Text>
      </View>
    );
  }
}
