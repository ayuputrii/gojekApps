import React from 'react';
import MapView from 'react-native-maps';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import style from './style';
import {StatusColor} from '../../components';
import Arrowright from '../../assets/svg/arrowright.svg';
import {searchLocation} from '../../config/redux/action/search';
import {useDispatch} from 'react-redux';
import Goride from '../../assets/img/goride.jpg';
import Gocar from '../../assets/svg/order-gocar.svg';
import Arrowleft from '../../assets/svg/Arrowleft.svg';
import Linkaja from '../../assets/img/linkAja.png';
import Notes from '../../assets/svg/notes.svg';

const ConfirmOrder = props => {
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
        <View style={style.body}>
          <TouchableOpacity>
            <Arrowright
              onPress={() => props.navigation.navigate('SearchDestination')}
            />
          </TouchableOpacity>
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
          <TouchableOpacity>
            <View
              style={style.buttonPickup}
              onPress={() => props.navigation.navigate('Booking')}>
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
