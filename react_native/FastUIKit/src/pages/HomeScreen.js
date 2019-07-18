import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";

const cols = 2; //一行两列
const { width } = Dimensions.get("window");
const kItemWidth = (width - 60) / cols;
const kItem = (width - 60) / cols;
export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "FastUIKit",
    headerStyle: {
      backgroundColor: "#1296db"
    },
    headerTintColor: "#fff"
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "List"
        },
        {
          title: "Set"
        },
        {
          title: "Image"
        },
        {
          title: "Text"
        }
      ]
    };
  }
  componentDidMount() {}
  renderItem = ({ item, index }) => {
    return (
      <TouchableHighlight>
        <View style={styles.gaidViewStyle}>
          <Text>{item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data} //数据源
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index} //inex 为key
          numColumns={cols}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F9F9F9"
  },

  gaidViewStyle: {
    borderRadius: 5,
    backgroundColor: "#fff",
    width: kItemWidth,
    height: kItemWidth,
    margin: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});
