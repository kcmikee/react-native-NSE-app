import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import NseNavigator from './navigations/NseNavigator'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'

const fetchFonts =()=> {
  return Font.loadAsync({
    'verdana': require('./assets/fonts/Verdana.ttf'),
    'segoeScript': require('./assets/fonts/segoeScript.ttf'),
    'segoePrint': require('./assets/fonts/SegoePrint.ttf'),
    'minion': require('./assets/fonts/MinionProRegular.ttf'),
  });
}



function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded){
    return (
      <AppLoading startAsync={fetchFonts}
        onFinish={()=>{
        setFontLoaded(true);
    }}
    />
  );
}
  return (
    <NseNavigator />
  );
}

export default App;

