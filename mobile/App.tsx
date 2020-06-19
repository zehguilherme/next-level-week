/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable camelcase */

import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';

import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';

export default function App() {
  // Quando a fonte terminou de ser carregada
  const [fontsLoaded] = useFonts([
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
  ]);

  // Enquanto as fontes ainda não foram carregadas
  if (!fontsLoaded) {
    return <AppLoading />; // sinal de carregamento
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
