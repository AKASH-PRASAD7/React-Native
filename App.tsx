import react from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello Mobile World !</Text>
        <Text>Hello Mobile World !</Text>
        <Text>Hello Mobile World !</Text>
        <Text>Hello Mobile World !</Text>
        <Image
          source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
          style={{width: 200, height: 200}}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
