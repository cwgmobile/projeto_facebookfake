/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Pressable, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import styles from './styles';



const Stack = createNativeStackNavigator();

const Home = ({navigation}) => {
  return (
  <>
    <View style={styles.pageHome}>
      <Pressable
        style={{
          backgroundColor: '#0f69ad',
          width: '80%',
          height: 40,
          margin: 10,
          borderRadius: 10, 
        }}
        onPress={() => navigation.navigate('Posts')}>
        <Text style= {{color:'#fff', textAlign:'center', fontSize: 20, marginVertical: 5}} >Ir para os posts</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: '#0f69ad',
          width: '80%',
          height: 40,
          margin: 10,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('Profile')}>
        <Text style= {{color:'#fff', textAlign:'center', fontSize: 20, marginVertical: 5}} >Ir para o perfil</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: '#0f69ad',
          width: '80%',
          height: 40,
          margin: 10,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('Blog')}>
        <Text style= {{color:'#fff', textAlign:'center', fontSize: 20, marginVertical: 5}}>Ir para o blog</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: '#0f69ad',
          width: '80%',
          height: 40,
          margin: 10,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text style= {{color:'#fff', textAlign:'center', fontSize: 20, marginVertical: 5}}>Ir para o Login</Text>
      </Pressable>
    </View>
  </>
  );
};

export default Home;
