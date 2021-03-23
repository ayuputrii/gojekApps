import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import {StatusColor} from '../../components';
import iconClose from '../../assets/icon/close.png';
import Arrowup from '../../assets/svg/arrowup.svg';
import Destination from '../../assets/svg/destination.svg';
import imgTop from '../../assets/img/top.png';
import Maps from '../../assets/svg/maps.svg';

const SearchLocation = props => {
  return (
    <SafeAreaView style={style.containerSearch}>
      <StatusBar backgroundColor={StatusColor.white} />
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
            <TextInput
              style={style.TextInput}
              placeholder="Your current location"
              placeholderTextColor="black"
            />
          </View>
          <View style={style.contentViewSearch} />
          <View style={style.flexPadding}>
            <Destination width={20} height={20} style={style.imgTop} />
            <TextInput
              style={style.TextInput}
              placeholder="Select for destination"
              placeholderTextColor="black"
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SetOriginPickup')}>
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
            <Text style={{fontSize: 18, color: '#00000d', fontWeight: 'bold'}}>
              That's right, order Gojek now
            </Text>
            <Text>
              Less stress on the road, more joy on{'\n'}the ride. Aaah.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchLocation;
