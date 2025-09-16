import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import AppNavegacion from './Src/Navegation/AppNavegacion';


export default function App() {
  return (
    <>
      <StatusBar styles="auto" />
      <AppNavegacion/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e31a0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
