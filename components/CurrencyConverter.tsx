import {StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import {currencyByRupee} from './Constants.ts';

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
  console.log(amount);

  return (
    <View>
      <Text style={styles.heading}>Currency Converter</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAmount}
        value={amount}
        placeholder="Enter Amount In ₹"
        keyboardType="number-pad"
        maxLength={14}
      />
      <View style={styles.Container}>
        <FlatList
          numColumns={3}
          data={currencyByRupee}
          renderItem={({item}) => <CountryCard {...item} />}
          keyExtractor={item => item.name}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
    color: '#2B2B52',
    margin: 20,
  },
  countrycard: {
    width: 100,
    height: 60,
    backgroundColor: '#DAE0E2',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
  },
  selected: {
    backgroundColor: '#3498DB',
  },

  countryflag: {
    fontSize: 20,
  },
  countryname: {
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    marginHorizontal: 60,
  },
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    marginTop: 50,
  },
});
