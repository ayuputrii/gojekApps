import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './style';
import Goride from '../../assets/svg/goride.svg';
import Gocar from '../../assets/svg/gocar.svg';
import Gofood from '../../assets/svg/gofood.svg';
import Gomart from '../../assets/svg/gomart.svg';

const FiturHome = ({navigation}) => {
  return (
    <View style={style.whiteContent}>
      <View style={style.fiturContent}>
        <View style={style.contentMenu}>
          <View>
            <TouchableOpacity>
              <Goride onPress={() => navigation.navigate('SearchLocation')} />
              <Text style={style.sizeFitur}>GoRide</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Gocar />
            <Text style={style.sizeFitur}>GoCar</Text>
          </View>
          <View>
            <Gofood />
            <Text style={style.sizeFitur}>GoFood</Text>
          </View>
          <View>
            <Gomart />
            <Text style={style.sizeFitur}>GoMart</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FiturHome;
