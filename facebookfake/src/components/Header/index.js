/* eslint-disable prettier/prettier */
import React,{useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '../../contexts/auth';
import styles from './styles';

const Header = ({title}) => {
const navigation = useNavigation();
const {signOut} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={ () => navigation.openDrawer() } >
        <Icon name="menu" size={36} color="#1877f2" />
      </TouchableOpacity>
          <Text style={styles.titleHeader}>{title}</Text>
      <TouchableOpacity onPress={ () => signOut() } >
        <Icon style={styles.buttonLogout} name="logout" size={36} color="#1877f2" />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
