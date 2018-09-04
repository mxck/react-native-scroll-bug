import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  state = { refreshing: false };

  onScroll = e => console.log(e.nativeEvent.contentOffset.y);

  // @@ Refresh mock
  refresh = () => {
    this.setState({ refreshing: true }, () => {
      setTimeout(() => {
        this.setState({ refreshing: false });
      }, 500);
    });
  };

  render() {
    const { refreshing } = this.state;

    return (
      <ScrollView
        style={styles.container}
        onScroll={this.onScroll}
        scrollEventThrottle={1}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={this.refresh} />
        }
      >
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 1000
  }
});
