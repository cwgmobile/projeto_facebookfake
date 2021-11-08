/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Posts from '../Screens/Posts';
import Profile from '../Screens/Profile';
import Blog from '../Screens/Blog';
import PostList from '../Screens/PostList';
import PostsDetails from '../Screens/PostsDetails';
import AuthRoutes from './authroutes';
import AuthContext from '../contexts/auth';
import Home from '../Screens/Home';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const {signed} = useContext(AuthContext);
  if (!signed) {
    return <AuthRoutes />;
  } else {
    return (
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}
        >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Blog" component={Blog} />
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="PostList" component={PostList} />
        <Stack.Screen name="PostDetails" component={PostsDetails} />
      </Stack.Navigator>
    );
  }
};
export default Routes;
