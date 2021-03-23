import React from 'react';
import MapView from 'react-native-maps';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  StatusBar,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import style from './style';
import {StatusColor} from '../../components';
import Arrowup from '../../assets/svg/arrowup.svg';
import Arrowright from '../../assets/svg/arrowright.svg';
import Earth from '../../assets/svg/earth.svg';
import Notes from '../../assets/svg/notes.svg';
import {searchLocation} from '../../config/redux/action/search';
import {useSelector, useDispatch} from 'react-redux';

const SetOriginPickup = props => {
  const dispatch = useDispatch();
  const DEVICE_WIDTH = Dimensions.get('window').width;
  const DEVICE_HEIGHT = Dimensions.get('window').height;
  const {pickupLocation, pickupLocationDetail} = useSelector(
    state => state.search,
  );

  const onRegionChange = region => {
    dispatch(
      searchLocation({
        region,
        pickup: true,
      }),
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={StatusColor.white} />
      <KeyboardAvoidingView behavior="position">
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
            <Arrowup style={style.imgArrow} />
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
                <Text style={style.fontSize}>Set pickup location</Text>
                <TouchableHighlight>
                  <Text style={style.touchEdit}>Edit</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={style.contentDestination}>
              <Arrowup style={style.imgArrow} />
              <View style={style.titleDestination}>
                <Text style={style.textStreet}>
                  {pickupLocation || 'Lokasi tidak ditemukan...'}
                </Text>
                <Text style={style.textAddress}>{pickupLocationDetail}</Text>
              </View>
            </View>
            <View style={style.notesOrder}>
              <View style={style.flexOne}>
                <TextInput
                  placeholder="Add notes to your driver..."
                  placeholderTextColor="gray"
                  style={style.TextInputOne}
                />
                <Notes style={style.imgNotes} />
              </View>
            </View>
            <TouchableOpacity>
              <Text style={style.buttonPickup}>Set pickup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SetOriginPickup;
