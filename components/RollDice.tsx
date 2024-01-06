import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import React, {useState} from 'react';
import Diceone from '../assets/diceone.png';
import Dicetwo from '../assets/dicetwo.png';
import Dicethree from '../assets/dicethree.png';
import Dicefour from '../assets/dicefour.png';
import Dicefive from '../assets/dicefive.png';
import Dicesix from '../assets/dicesix.png';

export default function RollDice() {
  const [diceFace, setDiceFace] = useState<ImageSourcePropType>(Dicefive);

  const rollDice = () => {
    let diceNum = Math.floor(Math.random() * 6) + 1;
    switch (diceNum) {
      case 1:
        setDiceFace(Diceone);
        break;
      case 2:
        setDiceFace(Dicetwo);
        break;
      case 3:
        setDiceFace(Dicethree);
        break;
      case 4:
        setDiceFace(Dicefour);
        break;
      case 5:
        setDiceFace(Dicefive);
        break;
      case 6:
        setDiceFace(Dicesix);
        break;
      default:
        setDiceFace(Dicefour);
    }
  };
  return (
    <View>
      <Text style={styles.heading}>Roll The Dice!</Text>
      <View style={styles.container}>
        <Image source={diceFace} style={styles.dice} />
        <TouchableOpacity onPress={rollDice} style={styles.btn}>
          <Text style={styles.btnTxt}>Tap To Roll!</Text>
        </TouchableOpacity>
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
    // height: 500,
    margin: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  dice: {
    width: 200,
    height: 200,
  },
  btn: {
    backgroundColor: '#25CCF7',
    marginTop: 60,
    padding: 10,
    borderRadius: 15,
  },
  btnTxt: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    padding: 5,
    color: '#EAF0F1',
  },
});
