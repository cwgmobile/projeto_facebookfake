/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
  },
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  postImage: {
    width: width,
    height: 300,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1877f2',
  },
  iconTime: {
    marginRight: 40,
    color: '#1877f2',
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#141414',
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    color: '#222222',
    marginVertical: 15,
  },
  textButton: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1877f2',
    flexDirection:'row',
  },
  likesCount: {
    fontSize: 14,
    color: '#1877f2',
    marginVertical: 15,
  },
  buttonRow: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#1877f2',
    marginBottom: 5,
  },
  buttonFooter: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
});
export default styles;
