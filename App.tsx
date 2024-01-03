import react from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import TrendingCard from './components/TrendingCard';
import Blogcard from './components/Blogcard';
import Contacts from './components/Contacts';
import PasswordGen from './components/PasswordGen';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <PasswordGen />
        {/* <FlatCard />
        <ElevatedCard />
        <TrendingCard />
        <Blogcard />
        <Contacts /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
