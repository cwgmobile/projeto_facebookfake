/* eslint-disable prettier/prettier */
// eslint-disable prettier/prettier *//

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';

const AuthRoutes = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
