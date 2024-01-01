import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

export default function Blogcard() {
  const redirect = (link: string) => {
    Linking.openURL(link);
  };
  return (
    <View>
      <Text style={styles.heading}>Blog Card</Text>
      <View style={styles.container}>
        <Text style={styles.headingCard}>About Black Hole</Text>
        <Image
          source={{
            uri: 'https://cdn.mos.cms.futurecdn.net/HsDtpFEHbDpae6wBuW5wQo.jpg',
          }}
          style={styles.imageCard}
        />
        <View style={styles.cardBody}>
          <TouchableOpacity
            onPress={() => redirect('https://en.wikipedia.org/wiki/Black_hole')}
            style={styles.cardLink}>
            <Text style={styles.textLink}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              redirect('https://www.linkedin.com/in/akash-prasad7/')
            }
            style={styles.cardLink}>
            <Text style={styles.textLink}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 450,
    backgroundColor: '#53E0BC',
    borderRadius: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginHorizontal: 10,
    marginTop: 4,
  },
  imageCard: {
    height: 300,
  },
  headingCard: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '600',
    margin: 10,
    textAlign: 'center',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 30,
  },
  cardLink: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 15,
  },
  textLink: {
    color: '#FFF',
    fontWeight: '500',
  },
});
