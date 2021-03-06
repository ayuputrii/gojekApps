import {Dimensions} from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default {
  container: {
    flex: 1,
    position: 'relative',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    left: 0,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT - 100,
    alignItems: 'center',
    padding: 12,
  },
  content: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
    height: 380,
    width: DEVICE_WIDTH,
    position: 'absolute',
    bottom: 0,
    left: 0,
    elvation: 30,
  },
  content1: {
    width: DEVICE_WIDTH,
    position: 'absolute',
  },
  contentSearchPickup: {
    marginTop: 30,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: '#fafafa',
    borderRadius: 20,
    backgroundColor: '#fff',
    elevation: 30,
  },
  flexPadding: {
    flexDirection: 'row',
    paddingLeft: 14,
  },
  flexSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgTop: {
    marginTop: 14,
  },
  TextInput: {
    color: '#00000d',
    marginLeft: 12,
    width: '70%'
  },
  contentViewSearch: {
    borderBottomWidth: 1,
    marginHorizontal: 70,
    marginLeft: 50,
    borderColor: '#e1e3e1',
  },
  touchEdit: {
    fontSize: 18,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: 'green',
    color: 'green',
    width: 50,
    textAlign: 'center',
    top: 35,
    right: 10,
    justifyContent: 'space-between',
  },
  contentDestination: {
    flexDirection: 'row',
    marginHorizontal: 28,
    marginTop: 40,
    elvation: 30,
  },
  imgGoride: {
    width: 34,
    height: 40,
  },
  titleGoride: {
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: 14,
  },
  titleDestination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStreet: {
    fontSize: 18,
    color: '#000d',
    fontWeight: 'bold',
  },
  txtGray: {
    fontSize: 16,
    color: 'gray',
  },
  titleGocar: {
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: 14,
  },
  contentBottom: {
    backgroundColor: 'white',
    elevation: 30,
    flex: 1,
    bottom: 0,
    height: 180,
    position: 'absolute',
    width: DEVICE_WIDTH,
  },
  viewContent: {
    marginHorizontal: 30,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRow: {
    flexDirection: 'row',
  },
  imgLink: {
    width: 25,
    height: 25,
    borderRadius: 8,
  },
  textLinkaja: {
    fontSize: 18,
    marginLeft: 10,
  },
  contentTry: {
    backgroundColor: '#08a5c4',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    height: 35,
    alignItems: 'center',
    alignContent: 'center',
  },
  titleTry: {
    fontSize: 16,
    marginLeft: 10,
    color: 'white',
  },
  textTry: {
    backgroundColor: '#0f5e6e',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    fontSize: 14,
    paddingRight: 20,
    color: 'white',
  },
  flexRow: {
    flexDirection: 'row',
  },
  buttonPickup: {
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 20,
    backgroundColor: 'green',
    color: '#fff',
    fontSize: 18,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textOrder: {
    fontSize: 18,
    top: 2,
    color: 'white',
  },
};
