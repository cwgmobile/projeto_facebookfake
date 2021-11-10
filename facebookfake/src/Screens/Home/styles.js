/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textButton: {
    color: '#fff',
    fontSize: 20,
  },
  container: {
    flex: 1,
  },
  imgBg: {
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#000',
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  slideView: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flex: 1,
    overflow: 'visible',
  },
  carouselImg: {
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: '#CED8F6',
  },
  carouselText: {
    padding: 18,
    color: '#FFF',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold',
  },
  carouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  moreInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CED8F6',
    width: '100%',
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  movieTitle: {
    paddingLeft: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f69ad',
    marginBottom: 5,
    flexDirection: 'row',
  },
  movieDesc: {
    paddingLeft: 20,
    paddingRight: 20,
    color: '#585858',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  iconLogout: {
    marginLeft: 20,
  },
});
