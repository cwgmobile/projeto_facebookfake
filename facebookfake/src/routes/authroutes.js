/* eslint-disable prettier/prettier */
// eslint-disable prettier/prettier *//

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../Screens/SplashScreen';

const AuthRoutes = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
