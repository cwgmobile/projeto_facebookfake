/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Posts from '../screens/Posts';
import Profile from '../screens/Profile';
import Blog from '../screens/Blog';
import PostList from '../screens/PostList';
import PostsDetails from '../screens/PostsDetails';
import AuthRoutes from './authroutes';
import AuthContext from '../contexts/auth';

const AppStack = createNativeStackNavigator();

const Routes = () => {

  const {signed} = useContext(AuthContext);

  if (!signed) {
    return <AuthRoutes />;
  } else {
    return (
    <AppStack.Navigator initialRouteName="SplashScreen">
            <AppStack.Screen name="SplashScreen" component={SplashScreen} />
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Login" component={Login} />
            <AppStack.Screen name="Profile" component={Profile} />
            <AppStack.Screen name="Posts" component={Posts} />
            <AppStack.Screen name="Blog" component={Blog} />
            <AppStack.Screen name="PostList" component={PostList} />
            <AppStack.Screen name="PostDetails" component={PostsDetails} />
    </AppStack.Navigator>
    );
  }
};

export default Routes;
