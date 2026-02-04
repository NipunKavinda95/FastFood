/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import {StyleSheet, Text, useColorScheme, View } from 'react-native';



function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[styles.container]}>
      <Text style={{marginTop:100}}>Hello, World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
  },
});

export default App;
