import React, { useRef, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import style from './style';
import {StatusColor} from '../../components';
import iconClose from '../../assets/icon/close.png';
import Arrowup from '../../assets/svg/arrowup.svg';
import Destination from '../../assets/svg/destination.svg';
import imgTop from '../../assets/img/top.png';
import Maps from '../../assets/svg/maps.svg';
import Location from '../../assets/svg/location.svg';
import Geocoder from 'react-native-geocoding';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {setLocation as setLocationAuto} from '../../config/redux/action/setLocation';
import { useDispatch, useSelector } from 'react-redux';

Geocoder.init('AIzaSyBzWnlMFdJAmZbbQEQKfHL0vnheiN2T1pc');
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const SearchLocation = props => {
  const dispatch = useDispatch();
  const pickupInput = useRef();
  const destinationInput = useRef();
  const [focusType, setFocusType] = useState('')
  const {pickupLocationDetail, destinationLocationDetail} = useSelector(
    state => state.search,
  );
  useEffect(() => {
    pickupInput?.current.setAddressText(pickupLocationDetail);
    if (props.navigation.isFocused()) {
      destinationInput?.current.focus();
    }
  }, [pickupLocationDetail])

  const setLocation = async (data, pickup) => {
    try {
      const res = await Geocoder.from(data?.description);
      dispatch(
        setLocationAuto({
          location: data?.structured_formatting?.main_text,
          locationDetail: data?.description,
          latitude: res.results[0]?.geometry?.location?.lat,
          longitude: res.results[0]?.geometry?.location?.lng,
          pickup,
        }),
      );
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={style.containerSearch}>
      <StatusBar backgroundColor={StatusColor.white} />
      <KeyboardAvoidingView behavior="padding">
        <View>
          <View style={style.contentSearchLocation}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
              <Image source={iconClose} style={style.imageClose} />
            </TouchableOpacity>
            <Text style={style.titlePickup}>Set pickup location</Text>
          </View>
          <View style={style.contentSearchPickup}>
            <View style={style.flexPadding}>
              <Arrowup width={20} height={20} style={style.imgTop} />
              <GooglePlacesAutocomplete
                ref={pickupInput}
                query={{
                  key: 'AIzaSyBzWnlMFdJAmZbbQEQKfHL0vnheiN2T1pc',
                  language: 'en', // language of the results
                }}
                debounce={500}
                onPress={data => setLocation(data, true)}
                suppressDefaultStyles={true}
                textInputProps={{
                  style: style.TextInput,
                  InputComp: TextInput,
                  placeholder: 'Your current location',
                  placeholderTextColor: 'gray',
                  errorStyle: {color: 'red'},
                  onFocus: () => setFocusType('pickup'),
                }}
                styles={{
                  container: {
                    width: DEVICE_WIDTH * 0.7,
                    flexWrap: 'wrap',
                  },
                  listView: {
                    maxHeight: DEVICE_HEIGHT * 0.43,
                  },
                }}
                renderRow={(data, index) => (
                  <View key={index}>
                    <View style={style.contentDestination} />
                    <View style={style.contentKm}>
                      <View style={style.contentSize}>
                        <Location width={20} height={20} />
                      </View>
                      <View style={style.flexMargin}>
                        <Text style={style.textNameLocation}>
                          {data.structured_formatting?.main_text ?? ''}
                        </Text>
                        <Text style={{fontSize: 12, lineHeight: 22}}>
                          {data?.description}
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
            <View style={style.contentViewSearch} />
            <View style={style.flexPadding}>
              <Destination width={20} height={20} style={style.imgTop} />
              <GooglePlacesAutocomplete
                ref={destinationInput}
                query={{
                  key: 'AIzaSyBzWnlMFdJAmZbbQEQKfHL0vnheiN2T1pc',
                  language: 'en', // language of the results
                }}
                debounce={500}
                onPress={data => setLocation(data, false)}
                suppressDefaultStyles={true}
                textInputProps={{
                  style: style.TextInput,
                  InputComp: TextInput,
                  placeholder: 'Your current location',
                  placeholderTextColor: 'gray',
                  errorStyle: {color: 'red'},
                  onFocus: () => setFocusType('destination'),
                }}
                styles={{
                  container: {
                    width: DEVICE_WIDTH * 0.7,
                    flexWrap: 'wrap',
                  },
                  listView: {
                    height: DEVICE_HEIGHT * 0.43,
                  },
                }}
                renderRow={(data, index) => (
                  <View key={index}>
                    <View style={style.contentDestination} />
                    <View style={style.contentKm}>
                      <View style={style.contentSize}>
                        <Location width={20} height={20} />
                      </View>
                      <View style={style.flexMargin}>
                        <Text style={style.textNameLocation}>
                          {data.structured_formatting?.main_text ?? ''}
                        </Text>
                        <Text style={{fontSize: 12, lineHeight: 22}}>
                          {data?.description}
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate(
                focusType === 'destination' ? 'SetDestination' : 'SetOriginPickup',
              )
            }>
            <View style={style.content}>
              <Maps width={15} height={15} style={{marginTop: 2}} />
              <Text style={{fontSize: 13, marginLeft: 5}}>Select via map</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 3,
              marginHorizontal: 10,
              borderColor: '#e1e3e1',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 12,
              marginVertical: 12,
            }}>
            <Image
              source={imgTop}
              style={{width: 40, height: 40, marginTop: 12}}
            />
            <View style={style.flexMargin}>
              <Text
                style={{fontSize: 18, color: '#00000d', fontWeight: 'bold'}}>
                That's right, order Gojek now
              </Text>
              <Text>
                Less stress on the road, more joy on{'\n'}the ride. Aaah.
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SearchLocation;
