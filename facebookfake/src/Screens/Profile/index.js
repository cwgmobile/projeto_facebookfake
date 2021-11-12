/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import {View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import {RNCamera} from 'react-native-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const Profile = () => {
  const camera = useRef();
  const [showCamera, setShowCamera] = useState(false);
  const [newImage, setNewImage] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('foto_perfil').then(img => {
      if (img) {
        setNewImage(img);
      }

      setNewImage(img ? img : '');
      setNewImage(img || '');
    });
  }, []);

  const takePicture = async () => {
    if (camera.current) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.current.takePictureAsync(options);
      let extension = data.uri.split('.');
      extension = extension[extension.length - 1];
      setNewImage(`data:image/${extension};base64,${data.base64}`);
      AsyncStorage.setItem(
        'foto_perfil',
        `data:image/${extension};base64,${data.base64}`,
      );
      setShowCamera(false);
    }
  };

  const removePhoto = () => {
    AsyncStorage.removeItem('foto_perfil');
    setNewImage('');
  };

  return (
  <SafeAreaView style={styles.totalContainer}>
    <Header title="Perfil" />
    <>
      {showCamera ? (
        <View style={styles.container}>
          <RNCamera
            ref={camera}
            style={styles.preview}
            type={RNCamera.Constants.Type.front}
          />
          <View
            style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => takePicture()}
              style={styles.capture}>
              <Text style={{fontSize: 14}}> SNAP </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.profileContainer}>
          {newImage === '' ? (
            <TouchableOpacity
              onPress={() => setShowCamera(true)}
              style={styles.capture}>
              <Text style={{fontSize: 14}}> Abrir Câmera </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setShowCamera(true)}>
              <>
                <Image style={styles.avatar} source={{uri: newImage}} />
                <View style={styles.overlayContainer}>
                  <View style={styles.iconContainer}>
                    <Icon name="camera" size={20} color="#fff" />
                  </View>
                </View>
              </>
            </TouchableOpacity>
          )}
          {newImage !== '' && (
            <TouchableOpacity onPress={() => removePhoto()}>
              <Icon name="trash" color="#FA5858" size={30} />
            </TouchableOpacity>
          )}
        </View>
      )}
    </>
    <>
      <ScrollView>
      <View style={styles.containerPerfil}>
        <Text style={styles.textPerfil}>Charles Godoy</Text>
        <Text style={styles.textDescription}>
          FrontEnd Developer | HTML 5 |CSS | JavaScript |ReactJs | TypeScript |
          VueJs | Cordova | React-Native{' '}
        </Text>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.buttonRedes} onPress={() => {}}>
            <Text style={{color: '#0f69ad'}}>LinkedIn </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRedes} onPress={() => {}}>
            <Text style={{color: '#0f69ad'}}>Instagram </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRedes} onPress={() => {}}>
            <Text style={{color: '#0f69ad'}}>WhatsApp </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRedes} onPress={() => {}}>
            <Text style={{color: '#0f69ad'}}>Site Portfólio </Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </>

  </SafeAreaView>
  );
};

export default Profile;
