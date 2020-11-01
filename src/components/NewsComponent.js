import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export default class NewsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.contImage}>
          <Image source={{uri: this.props.image}} style={styles.itemImage} />
        </View>

        <View style={styles.itemContent}>
          <Text style={styles.title}>{this.props.title}</Text>

          <Text style={styles.itemText}>
            {this.props.author} {this.props.date}
          </Text>

          <Text style={styles.itemText}>{this.props.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  contImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContent: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: '#e09f3e',
  },
  itemText: {
    color: '#fff3b0',
    alignSelf: 'stretch',
    textAlign: 'left',
  },
});
