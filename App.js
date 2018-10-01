import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Game } from "./src/index"



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Game />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
