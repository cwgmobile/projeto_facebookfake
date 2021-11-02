/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Pressable, Text} from 'react-native';
import styles from './styles';
import {AuthContext} from '../../contexts/auth';


const Home = ({navigation}) => {
  const {signOut} = useContext(AuthContext);
  return (

    <View style={styles.pageHome}>
        <View>
              <Pressable
                style={{
                  backgroundColor: 'lightblue',
                  width: 150,
                  height: 30,
                  margin: 30,
                }}
                onPress={() => signOut()}>
                <Text>Deslogar</Text>
              </Pressable>
        </View>
    </View>
  );
};

export default Home;
