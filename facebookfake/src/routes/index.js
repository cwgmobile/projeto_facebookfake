/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StackRoutes from './stackRoutes';
import Posts from '../Screens/Posts';
import Profile from '../Screens/Profile';
import Blog from '../Screens/Blog';
import PostList from '../Screens/PostList';
import PostsDetails from '../Screens/PostsDetails';
import AuthRoutes from './authroutes';
import AuthContext from '../contexts/auth';

const Drawer = createDrawerNavigator();

const Routes = () => {
  const {signed} = useContext(AuthContext);

  if (!signed) {
    return <AuthRoutes />;
  } else {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,

          drawerStyle: {
            backgroundColor: '#f0f2f5',
            paddingTop: 40,
          },
          drawerActiveBackgroundColor: '#1877f2',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#1877f2',
        }}
        initialRouteName="HomeDrawer">
        <Drawer.Screen
          name="HomeDrawer"
          component={StackRoutes}
          options={{
            title: 'Home',
            drawerIcon: ({focused, size, color}) => (
              <Icon
                name={focused ? 'home' : 'home'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Blog"
          component={Blog}
          options={{
            title: 'Blog',
            drawerIcon: ({focused, size, color}) => (
              <Icon
                name={focused ? 'post-add' : 'post-add'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Posts"
          component={Posts}
          options={{
            title: 'Posts',
            drawerIcon: ({focused, size, color}) => (
              <Icon
                name={focused ? 'rss-feed' : 'rss-feed'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Perfil',
            drawerIcon: ({focused, size, color}) => (
              <Icon
                name={focused ? 'person' : 'person'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="PostList"
          component={PostList}
          options={{
            title: 'Lista de Posts',
            drawerIcon: ({focused, size, color}) => (
              <Icon
                name={focused ? 'list' : 'list'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="PostsDetails"
          component={PostsDetails}
          options={{
            title: 'Detalhes',
            drawerIcon: ({focused, size, color}) => (
              <Icon
                name={focused ? 'info' : 'info'}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
};

export default Routes;
