import React from 'react';
import {StyleSheet, View, Text, useColorScheme} from 'react-native';

const AppPro = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.lightText : styles.darkText}>Akash</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkText: {
    color: '#000000',
  },
  lightText: {
    color: '#FFFFFF',
  },
});

export default AppPro;
