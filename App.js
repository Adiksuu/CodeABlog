import React from 'react';
import Navigator from './screens/Navigator';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold } from '@expo-google-fonts/poppins';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import Loading from './screens/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_800ExtraBold, Poppins_700Bold, Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold
  });

  return fontsLoaded ? (
    <Navigator />
  ) : <Loading />;
}
