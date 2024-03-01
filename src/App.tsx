/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TextInput
} from 'react-native';
import pati_data from './data.json'
import PatiCard from './components/PatiCard';
import styles from './components/PatiCard/PatiCardstyle'



function App() {
  return (
    <SafeAreaView>
      <View>
        <Text style= {styles.bigTitle}>PATIKASTORE</Text>
        <FlatList 
          data={pati_data}
          renderItem={({item}) => <PatiCard pati={item}/>}
          numColumns={2}
          contentContainerStyle={{paddingBottom:125}}
        />
      </View>
    </SafeAreaView>
  )
}


export default App;
