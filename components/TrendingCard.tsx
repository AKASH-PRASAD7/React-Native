import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function TrendingCard() {
  return (
    <View>
      <Text style={styles.heading}>Trending Card</Text>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://astrocamp.org/app/uploads/2015/12/IS-BH-1024x576-1.jpg',
          }}
          style={styles.imageCard}
        />
        <View style={styles.textBody}>
          <Text style={styles.cardheading}>Black Hole</Text>
          <Text style={styles.cardDesc}>100 light years away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#777E8B',
    borderRadius: 10,
    height: 400,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginHorizontal: 10,
    marginTop: 4,
  },
  imageCard: {
    height: 300,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  textBody: {
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 4,
  },
  cardheading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  cardDesc: {
    fontSize: 12,
    fontWeight: '400',
    marginTop: 10,
  },
});
