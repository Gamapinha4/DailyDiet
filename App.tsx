import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { useFonts, NunitoSans_600SemiBold ,NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import Routes from './src/Routes';
import Home from './src/screens/Home';

export default function App() {

  const [fontsLoaded] = useFonts({NunitoSans_600SemiBold, NunitoSans_700Bold });

  return (
    <>
    <StatusBar barStyle={'dark-content'} translucent backgroundColor={"transparent"}/>
    {fontsLoaded && <Routes/>}
    </>
  );
}