import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.heading}>ElevatedCard</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        horizontal={true}>
        <View style={styles.box}>
          <Text>1</Text>
        </View>
        <View style={styles.box}>
          <Text>2</Text>
        </View>
        <View style={styles.box}>
          <Text>3</Text>
        </View>
        <View style={styles.box}>
          <Text>4</Text>
        </View>
        <View style={styles.box}>
          <Text>5</Text>
        </View>
        <View style={styles.box}>
          <Text>6</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginHorizontal: 10,
    marginTop: 4,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#BB2CD9',
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 4,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowColor: '#01CBC6',
    shadowRadius: 10,
  },
});
