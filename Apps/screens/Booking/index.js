import React, {useEffect, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  TextInput,
} from 'react-native';
import style from './style';
import {StatusColor} from '../../components';
import Destination from '../../assets/svg/destination.svg';
import Arrowright from '../../assets/svg/arrowright.svg';
import Earth from '../../assets/svg/earth.svg';
import {useSelector} from 'react-redux';
import IconPhone from '../../assets/svg/phone.svg';
import Gojek from '../../assets/img/gojek.jpg';
import Trophy from '../../assets/svg/trophy.svg';
import Arrowup from '../../assets/svg/arrowup.svg';

const Booking = props => {
  const mapRef = useRef(null);
  const DEVICE_WIDTH = Dimensions.get('window').width;
  const DEVICE_HEIGHT = Dimensions.get('window').height;
  const {
    pickupLocation,
    pickupLocationDetail,
    pickupLocationLatitude,
    pickupLocationLongitude,
    destinationLocation,
    destinationLocationDetail,
    destinationLocationLatitude,
    destinationLocationLongitude,
  } = useSelector(state => state.search);

  useEffect(() => {
    if (props.navigation.isFocused()) {
      animateCamera();
      setTimeout(() => {
        props.navigation.navigate('Payment')
      }, 1000 * 10)
    }
  });

  const animateCamera = () => {
    mapRef.current.fitToCoordinates(
      [
        {
          latitude: pickupLocationLatitude,
          longitude: pickupLocationLongitude,
        },
        {
          latitude: destinationLocationLatitude,
          longitude: destinationLocationLongitude,
        },
      ],
      {
        edgePadding: {
          top: 350,
          right: 40,
          bottom: 750,
          left: 40,
        },
        animated: true,
      },
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={StatusColor.white} />
      <View>
        <MapView
          ref={mapRef}
          initialRegion={{
            latitude: pickupLocationLatitude,
            longitude: pickupLocationLongitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{width: DEVICE_WIDTH, height: DEVICE_HEIGHT}}>
          {pickupLocation && (
            <Marker
              coordinate={{
                latitude: pickupLocationLatitude,
                longitude: pickupLocationLongitude,
              }}
              title="Lokasi Pickup">
              <Arrowup style={style.imgArrow} />
            </Marker>
          )}
          {destinationLocation && (
            <Marker
              coordinate={{
                latitude: destinationLocationLatitude,
                longitude: destinationLocationLongitude,
              }}
              title="Lokasi Tujuan">
              <Destination style={style.imgArrow} />
            </Marker>
          )}
        </MapView>
        <View style={style.body}>
          <TouchableOpacity>
            <Arrowright onPress={() => props.navigation.navigate('Home')} />
          </TouchableOpacity>
          <Earth />
        </View>
        <View style={style.content1}>
          <View style={style.contentSearchPickup}>
            <View style={style.flexSpace}>
              <View style={style.flexPadding}>
                <Arrowup width={20} height={20} style={style.imgTop} />
                <TextInput
                  style={style.TextInput}
                  placeholder="Your current location"
                  placeholderTextColor="gray"
                  value={pickupLocationDetail}
                />
              </View>
              <TouchableHighlight>
                <Text
                  style={style.touchEdit}
                  onPress={() => props.navigation.navigate('SearchLocation')}>
                  Edit
                </Text>
              </TouchableHighlight>
            </View>
            <View style={style.contentViewSearch} />
            <View style={style.flexPadding}>
              <Destination width={20} height={20} style={style.imgTop} />
              <TextInput
                style={style.TextInput}
                placeholder="Select for destination"
                placeholderTextColor="gray"
                value={destinationLocationDetail}
              />
            </View>
          </View>
        </View>
        <View style={style.backgroundContent}>
          <View style={style.contentBack}>
            <Arrowup style={style.imageArrow} width={30} height={30} />
            <View style={style.viewBack}>
              <Text style={style.fontText}>Driver akan sampai dalam</Text>
              <Text style={style.titleMin}>11 Menit</Text>
            </View>
          </View>
          <View style={style.content}>
            <View style={style.contentMenu}>
              <View style={style.firstContent}>
                <Text style={style.fontSize}>R6508HP</Text>
                <View style={style.flexRow}>
                  <Text style={style.textGray}>Samira</Text>
                  <View style={style.viewTrophy}>
                    <Trophy width={20} height={20} />
                    <Text style={style.titleTrophy}>Driver Unggulan</Text>
                  </View>
                </View>
              </View>
              <Image source={Gojek} style={style.imgGojek} />
            </View>
            <View style={style.viewButton}>
              <IconPhone width={40} height={40} />
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Payment')}>
                <Text style={style.buttonPickup}>Perjalanan Selesai</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Booking;
