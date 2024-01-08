import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {currencyByRupee} from './Constants.ts';
import Snackbar from 'react-native-snackbar';

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
  const [convetedAmount, setConvetedAmount] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Currency>();

  const handleCountrySelect = (selectedCountry: Currency) => {
    if (!amount) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }
    const amount1 = parseFloat(amount);
    if (!isNaN(amount1)) {
      setSelectedCountry(selectedCountry);
      let converted = +amount1 * selectedCountry.value;
      setConvetedAmount(converted.toString());
    } else {
      return Snackbar.show({
        text: 'Only Numbers Allowed',
        backgroundColor: '#F4BE2C"',
        textColor: '#000000',
      });
    }
  };

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
      {selectedCountry && amount && (
        <View style={styles.result}>
          <Text style={styles.resultText}>
            ₹{amount} Equals {selectedCountry.symbol}
            {convetedAmount} 🤑
          </Text>
        </View>
      )}
      <View style={styles.Container}>
        <FlatList
          numColumns={3}
          data={currencyByRupee}
          renderItem={({item}) => (
            <Pressable
              style={[
                styles.countryCardPressable,
                {
                  backgroundColor:
                    selectedCountry?.name === item.name ? '#3498DB' : '#DAE0E2',
                },
              ]}
              onPress={() => handleCountrySelect(item)}>
              <CountryCard {...item} />
            </Pressable>
          )}
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
  resultText: {
    fontSize: 25,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  countrycard: {
    width: 100,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
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
  result: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#45CE30',
    padding: 20,
    borderRadius: 15,
  },
  countryCardPressable: {
    backgroundColor: '#DAE0E2',
    margin: 10,
    borderRadius: 15,
  },
});
