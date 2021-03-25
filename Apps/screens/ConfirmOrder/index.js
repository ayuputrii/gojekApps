import React, {useRef, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image,
  TouchableHighlight,
} from 'react-native';
import style from './style';
import {StatusColor} from '../../components';
import Arrowright from '../../assets/svg/arrowright.svg';
import Goride from '../../assets/img/goride.jpg';
import Gocar from '../../assets/svg/order-gocar.svg';
import Arrowleft from '../../assets/svg/Arrowleft.svg';
import Linkaja from '../../assets/img/linkAja.png';
import Notes from '../../assets/svg/notes.svg';
import Arrowup from '../../assets/svg/arrowup.svg';
import Destination from '../../assets/svg/destination.svg';
import {useSelector} from 'react-redux';

const ConfirmOrder = props => {
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
          {Boolean(pickupLocation) && (
            <Marker
              coordinate={{
                latitude: pickupLocationLatitude,
                longitude: pickupLocationLongitude,
              }}
              title="Lokasi Pickup">
              <Arrowup style={style.imgArrow} />
            </Marker>
          )}
          {Boolean(destinationLocation) && (
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
            <Arrowright
              onPress={() => props.navigation.navigate('SearchLocation')}
            />
          </TouchableOpacity>
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
        <View style={style.content}>
          <View style={style.contentDestination}>
            <Image source={Goride} style={style.imgGoride} />
            <View style={style.titleGoride}>
              <View style={style.titleDestination}>
                <Text style={style.textStreet}>GoRide</Text>
                <Text style={style.textStreet}>Rp18.000</Text>
              </View>
              <View style={style.titleDestination}>
                <Text style={style.txtGray}>1 person</Text>
                <Text style={style.txtGray}>1-5 mins</Text>
              </View>
            </View>
          </View>
          <View style={style.contentDestination}>
            <Gocar width={40} height={40} />
            <View style={style.titleGocar}>
              <View style={style.titleDestination}>
                <Text style={style.textStreet}>GoRide</Text>
                <Text style={style.textStreet}>Rp18.000</Text>
              </View>
              <View style={style.titleDestination}>
                <Text style={style.txtGray}>1-4 people</Text>
                <Text style={style.txtGray}>3-7 mins</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={style.contentBottom}>
          <View style={style.viewContent}>
            <View style={style.flexRow}>
              <Image source={Linkaja} style={style.imgLink} />
              <Text style={style.textLinkaja}>LinkAja</Text>
            </View>
            <Notes />
          </View>
          <TouchableOpacity>
            <View style={style.contentTry}>
              <Text style={style.titleTry}>
                Try PayLater and pay by the end of the month
              </Text>
              <Text style={style.textTry}>Try</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Booking')}>
            <View style={style.buttonPickup}>
              <Text style={style.textOrder}>Order GoRide</Text>
              <View style={style.flexRow}>
                <Text style={style.textOrder}>Rp18.000</Text>
                <Arrowleft width={25} height={25} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmOrder;
