/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import AuthContext from '../../contexts/auth';

const Home = () => {
  const {signOut} = useContext(AuthContext);
  return (
    <View style={styles.pageHome}>
      <Pressable style={styles.button} onPress={() => signOut()}>
        <Text style={styles.textButton}>Deslogar</Text>
      </Pressable>
    </View>
  );
};

export default Home;
