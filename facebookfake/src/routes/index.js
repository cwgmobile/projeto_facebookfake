/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Icon } from 'react-native-vector-icons/MaterialIcons';
import SplashScreen from '../Screens/SplashScreen';
import Login from '../Screens/Login';
import StackRoutes from './stackRoutes';
import Posts from '../Screens/Posts';
import Profile from '../Screens/Profile';
import Blog from '../Screens/Blog';
import PostList from '../Screens/PostList';
import PostsDetails from '../Screens/PostsDetails';
import AuthRoutes from './authroutes';
import AuthContext from '../contexts/auth';
import Home from '../Screens/Home';

const Drawer = createDrawerNavigator();

const Routes = () => {

  const {signed} = useContext(AuthContext);

 if (!signed) {
   return <AuthRoutes />;
  } else {
    return (
    <Drawer.Navigator
    screenOptions={{
      drawerStyle:{
        backgroundColor:'#E6E6E6',
        paddingTop:20,
      },
      drawerActiveBackgroundColor:'#0f69ad',
      drawerActiveTintColor:'#fff',
      drawerInactiveTintColor:'#0f69ad',
    }}
    initialRouteName="SplashScreen"
    >
            <Drawer.Screen name="SplashScreen" screenOptions={{headerShown: false}} component={SplashScreen} />
            <Drawer.Screen name="Login" screenOptions={{headerShown: false}} component={Login} />
            <Drawer.Screen name="HomeDrawer" 
            screenOptions={{headerShown: false}} 
            component={StackRoutes} 
              options={{
                title:'Início',
                drawerIcon:({focused, size, color}) => ( <Icon name={ focused ? 'Home' : 'home-outline' } size={size} color={color} />),
            }}
          />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Blog" component={Blog} />
            <Drawer.Screen name="Posts" component={Posts} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="PostList" component={PostList} />
            <Drawer.Screen name="PostDetails" component={PostsDetails} />
    </Drawer.Navigator>
    );
  }
};

export default Routes;
