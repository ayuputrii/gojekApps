import React from 'react';
import MapView from 'react-native-maps';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import style from './style';
import {StatusColor} from '../../components';
import Destination from '../../assets/svg/destination.svg';
import Arrowright from '../../assets/svg/arrowright.svg';
import Earth from '../../assets/svg/earth.svg';
import {searchLocation} from '../../config/redux/action/search';
import {useSelector, useDispatch} from 'react-redux';

const SetDestination = props => {
  const dispatch = useDispatch();
  const DEVICE_WIDTH = Dimensions.get('window').width;
  const DEVICE_HEIGHT = Dimensions.get('window').height;
  const {destinationLocation, destinationLocationDetail} = useSelector(
    state => state.search,
  );

  const onRegionChange = region => {
    dispatch(
      searchLocation({
        region,
      }),
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={StatusColor.white} />
      <View style={{position: 'relative'}}>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onRegionChangeComplete={onRegionChange}
          style={{width: DEVICE_WIDTH, height: DEVICE_HEIGHT}}
        />
        <View style={style.tes}>
          <Destination style={style.imgArrow} />
        </View>
        <View style={style.body}>
          <TouchableOpacity>
            <Arrowright
              onPress={() => props.navigation.navigate('SearchDestination')}
            />
          </TouchableOpacity>
          <Earth />
        </View>
        <View style={style.content}>
          <View style={style.contentMenu}>
            <View style={style.firstContent}>
              <Text style={style.fontSize}>Set destination location</Text>
              <TouchableHighlight>
                <Text
                  style={style.touchEdit}
                  onPress={() => props.navigation.navigate('SearchLocation')}>
                  Edit
                </Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={style.contentDestination}>
            <Destination style={style.imgArrow} />
            <View style={style.titleDestination}>
              <Text style={style.textStreet}>
                {destinationLocation || 'Lokasi tidak ditemukan...'}
              </Text>
              <Text style={style.textAddress}>{destinationLocationDetail}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ConfirmOrder')}>
            <Text style={style.buttonPickup}>Set destination location</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SetDestination;
