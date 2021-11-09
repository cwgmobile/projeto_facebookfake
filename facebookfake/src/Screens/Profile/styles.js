/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#0f69ad',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150,
    margin: 20,
  },
  overlayContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  iconContainer: {
    height: 40,
    width: '100%',
    backgroundColor: 'rgba(70,130,180,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    alignSelf: 'center',
    marginTop: 25,
  },
  containerPerfil: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0f69ad',
    borderRadius: 25,
    margin: 15,
    marginBottom: 50,
  },
  textPerfil: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  textDescription: {
    marginVertical: 15,
    marginHorizontal: 15,
    fontSize: 15,
    color: '#fff',
    alignItems: 'center',
  },
  containerButton: {
    marginBottom: 30,
  },
  buttonRedes: {
    backgroundColor: '#fff',
    paddingHorizontal: 130,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
