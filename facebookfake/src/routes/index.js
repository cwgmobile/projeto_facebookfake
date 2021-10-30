/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Posts from '../Screens/Posts';
import Profile from '../Screens/Profile';
import Blog from '../Screens/Blog';
import PostList from '../Screens/PostList';
import PostsDetails from '../Screens/PostsDetails';
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
            <AppStack.Screen name="Home" component={Home} />
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
