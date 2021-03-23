import {Dimensions} from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default {
  container: {
    flex: 1,
    position: 'relative',
  },
  tes: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 5,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    left: 0,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT + 90,
    alignItems: 'center',
    padding: 12,
  },
  content: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
    height: 280,
    width: DEVICE_WIDTH,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  contentMenu: {
    marginLeft: 15,
    padding: 15,
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstContent: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  fontSize: {
    marginBottom: 15,
    fontSize: 20,
    color: '#000d',
    fontWeight: 'bold',
  },
  touchEdit: {
    fontSize: 18,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: 'green',
    color: 'green',
    width: 50,
    textAlign: 'center',
    marginRight: 18,
  },
  contentDestination: {
    flexDirection: 'row',
    marginHorizontal: 30,
  },
  titleDestination: {
    flexDirection: 'column',
    marginHorizontal: 14,
  },
  textStreet: {
    fontSize: 18,
    color: '#000d',
    fontWeight: 'bold',
  },
  textAddress: {
    fontSize: 16,
    color: 'gray',
  },
  imgArrow: {
    width: 20,
    height: 20,
  },
  flexOne: {
    flex: 1,
  },
  notesOrder: {
    marginHorizontal: 25,
    marginTop: 25,
    flexDirection: 'row',
  },
  TextInputOne: {
    borderWidth: 0.8,
    borderColor: '#b8b6b6',
    height: 42,
    backgroundColor: '#ebebeb',
    fontSize: 13,
    paddingLeft: 45,
    paddingRight: 20,
    borderRadius: 20,
    marginTop: 5,
  },
  imgNotes: {
    position: 'absolute',
    top: 16,
    left: 18,
  },
  buttonPickup: {
    marginHorizontal: 25,
    marginVertical: 15,
    textAlign: 'center',
    borderRadius: 20,
    backgroundColor: 'green',
    color: '#fff',
    fontSize: 18,
    padding: 10,
  },
};
