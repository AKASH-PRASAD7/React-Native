import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.heading}>Flatcard</Text>
      <View style={styles.container}>
        <View style={[styles.box, styles.redbox]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.box, styles.greenbox]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.box, styles.bluebox]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    flexDirection: 'row',
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
    margin: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  redbox: {
    backgroundColor: '#E8290B',
  },
  greenbox: {
    backgroundColor: '#45CE30',
  },
  bluebox: {
    backgroundColor: '#10A881',
  },
});
