import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default function Bgchanger() {
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [topSquarebg, setTopSqaurebg] = useState('#75DA8B');
  const [topCirclebg, setTopCirclebg] = useState('#F0DF87');
  const [bottomSquarebg, setBottomSquarebg] = useState('#616C6F');
  const [bottomCirclebg, setBottomCirclebg] = useState('#019031');

  const bgChanger = () => {
    let color1 = '#';
    let color2 = '#';
    let color3 = '#';
    let color4 = '#';
    let color5 = '#';
    for (let i = 0; i < 6; i++) {
      color1 += Math.floor(Math.random() * 16).toString(16);
      color2 += Math.floor(Math.random() * 16).toString(16);
      color3 += Math.floor(Math.random() * 16).toString(16);
      color4 += Math.floor(Math.random() * 16).toString(16);
      color5 += Math.floor(Math.random() * 16).toString(16);
    }
    setBgColor(color1);
    setBottomCirclebg(color2);
    setTopSqaurebg(color3);
    setBottomSquarebg(color4);
    setTopCirclebg(color5);
  };

  return (
    <>
      <View style={[styles.view, {backgroundColor: bgColor}]}>
        <StatusBar backgroundColor={bgColor} />
        <Text style={styles.heading}>Bg Color Changer</Text>
        <View style={styles.container}>
          <View style={[styles.topSquare, {backgroundColor: topSquarebg}]} />
          <View style={[styles.topCircle, {backgroundColor: topCirclebg}]} />
        </View>
        <TouchableOpacity onPress={bgChanger} style={styles.btn}>
          <Text style={styles.btnTxt}>Press me</Text>
        </TouchableOpacity>

        <View style={styles.container}>
          <View
            style={[styles.bottomSquare, {backgroundColor: bottomSquarebg}]}
          />
          <View
            style={[styles.bottomCircle, {backgroundColor: bottomCirclebg}]}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 900,
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
    color: '#FFFFFF',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    margin: 20,
  },
  topSquare: {
    width: 100,
    height: 100,
  },
  topCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  bottomSquare: {
    width: 100,
    height: 100,
  },
  bottomCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  btn: {
    backgroundColor: '#45CE30',
    borderRadius: 12,
    margin: 40,
  },
  btnTxt: {
    color: '#FFFFFF',
    padding: 10,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
  },
});
