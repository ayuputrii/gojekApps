import React from 'react';
import MapView from 'react-native-maps';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import style from './style';
import {StatusColor} from '../../components';
import Destination from '../../assets/svg/destination.svg';
import Arrowright from '../../assets/svg/arrowright.svg';
import Earth from '../../assets/svg/earth.svg';
import {searchLocation} from '../../config/redux/action/search';
import {useDispatch} from 'react-redux';
import IconPhone from '../../assets/svg/phone.svg';
import Gojek from '../../assets/img/gojek.jpg';
import Trophy from '../../assets/svg/trophy.svg';
import Arrowup from '../../assets/svg/arrowup.svg';

const SetDestination = props => {
  const dispatch = useDispatch();
  const DEVICE_WIDTH = Dimensions.get('window').width;
  const DEVICE_HEIGHT = Dimensions.get('window').height;
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
      <View>
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
            <Arrowright onPress={() => props.navigation.navigate('Home')} />
          </TouchableOpacity>
          <Earth />
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
                onPress={() => props.navigation.navigate('ConfirmOrder')}>
                <Text
                  style={style.buttonPickup}
                  onPress={() => props.navigation.navigate('Payment')}>
                  Perjalanan Selesai
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SetDestination;
