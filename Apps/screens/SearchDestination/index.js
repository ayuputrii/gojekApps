import React from 'react';
import {
  SafeAreaView,
  ScrollView,
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
import Location from '../../assets/svg/location.svg';
import Maps from '../../assets/svg/maps.svg';
import {useSelector} from 'react-redux';

const SearchDestination = props => {
  const dataSearch = useSelector(state => state);

  return (
    <SafeAreaView style={style.containerSearch}>
      <StatusBar backgroundColor={StatusColor.white} />
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 25,
            marginTop: 25,
          }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Image source={iconClose} style={style.imageClose} />
          </TouchableOpacity>
          <Text style={style.titlePickup}>Where would you like to go?</Text>
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
          onPress={() => props.navigation.navigate('SetDestination')}>
          <View style={style.content}>
            <Maps width={15} height={15} style={{marginTop: 2}} />
            <Text style={{fontSize: 13, marginLeft: 5}}>Select via map</Text>
          </View>
        </TouchableOpacity>
        <ScrollView>
          <View>
            <View style={style.contentDestination} />
            <View style={style.contentKm}>
              <View style={style.contentSize}>
                <Location width={20} height={20} />
                <Text>20.6 km</Text>
              </View>
              <View style={style.flexMargin}>
                <Text style={style.textNameLocation}>
                  {dataSearch.location ?? '-'}
                </Text>
                <Text style={{fontSize: 12, lineHeight: 22}}>
                  Jl. Cerne Kidul, Cerme Kidul, Gresik. {'\n'}Kabupaten Gresik,
                  Jawa Timur 61171,{'\n'}Indonesia
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={style.contentDestination} />
            <View style={style.contentKm}>
              <View style={style.contentSize}>
                <Location width={20} height={20} />
                <Text>20.6 km</Text>
              </View>
              <View style={style.flexMargin}>
                <Text style={style.textNameLocation}>Polsek cerne</Text>
                <Text style={{fontSize: 12, lineHeight: 22}}>
                  Jl. Cerne Kidul, Cerme Kidul, Gresik. {'\n'}Kabupaten Gresik,
                  Jawa Timur 61171,{'\n'}Indonesia
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={style.contentDestination} />
            <View style={style.contentKm}>
              <View style={style.contentSize}>
                <Location width={20} height={20} />
                <Text>20.6 km</Text>
              </View>
              <View style={style.flexMargin}>
                <Text style={style.textNameLocation}>Polsek cerne</Text>
                <Text style={{fontSize: 12, lineHeight: 22}}>
                  Jl. Cerne Kidul, Cerme Kidul, Gresik. {'\n'}Kabupaten Gresik,
                  Jawa Timur 61171,{'\n'}Indonesia
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={style.contentDestination} />
            <View style={style.contentKm}>
              <View style={style.contentSize}>
                <Location width={20} height={20} />
                <Text>20.6 km</Text>
              </View>
              <View style={style.flexMargin}>
                <Text style={style.textNameLocation}>Polsek cerne</Text>
                <Text style={{fontSize: 12, lineHeight: 22}}>
                  Jl. Cerne Kidul, Cerme Kidul, Gresik. {'\n'}Kabupaten Gresik,
                  Jawa Timur 61171,{'\n'}Indonesia
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={style.contentDestination} />
            <View style={style.contentKm}>
              <View style={style.contentSize}>
                <Location width={20} height={20} />
                <Text>20.6 km</Text>
              </View>
              <View style={style.flexMargin}>
                <Text style={style.textNameLocation}>Polsek cerne</Text>
                <Text style={{fontSize: 12, lineHeight: 22}}>
                  Jl. Cerne Kidul, Cerme Kidul, Gresik. {'\n'}Kabupaten Gresik,
                  Jawa Timur 61171,{'\n'}Indonesia
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchDestination;
