import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

const CountryCard = (props: Currency): JSX.Element => {
  return (
    <View style={styles.countrycard}>
      <Text style={styles.countryflag}>{props.flag}</Text>
      <Text style={styles.countryname}>{props.name}</Text>
    </View>
  );
};

export default function CurrencyConverter(): JSX.Element {
  const [amount, setAmount] = useState('');

  return (
    <View>
      <Text style={styles.heading}>Currency Converter</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAmount}
        value={amount}
        placeholder="Enter Amount In ₹"
        keyboardType="numeric"
        maxLength={14}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
    color: '#2B2B52',
    margin: 10,
  },
  countrycard: {
    width: 100,
    height: 60,
    backgroundColor: '#A4B0BD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryflag: {
    fontSize: 20,
  },
  countryname: {
    fontSize: 24,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
