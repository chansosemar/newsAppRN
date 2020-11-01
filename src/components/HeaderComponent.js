import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>DAILYNFO</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    color: '#e09f3e',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#222',
  },
});
