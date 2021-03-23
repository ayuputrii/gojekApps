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
    height: DEVICE_HEIGHT + 200,
    alignItems: 'center',
    padding: 12,
  },
  content: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
    height: 230,
    width: DEVICE_WIDTH,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  contentMenu: {
    marginLeft: 15,
    padding: 10,
    paddingTop: 20,
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
    marginBottom: 8,
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
    marginHorizontal: 28,
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
  buttonPickup: {
    marginHorizontal: 20,
    marginVertical: 15,
    textAlign: 'center',
    borderRadius: 20,
    backgroundColor: 'green',
    color: '#fff',
    fontSize: 18,
    padding: 10,
  },
  imgArrow: {
    width: 20,
    height: 20,
  },
};
