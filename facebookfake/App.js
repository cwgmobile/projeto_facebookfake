/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import AuthRoutes from './src/routes/authroutes';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/auth';
//import {AuthProvider} from './src/contexts/auth';
//import SplashScreen from './src/Screens/SplashScreen';
//  import Login from './src/Screens/Login';
//  import Posts from './src/Screens/Posts';

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
