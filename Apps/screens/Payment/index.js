import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import style from './style';
import {StatusColor} from '../../components';
import Goride from '../../assets/icon/go-ride.png';
import Linkaja from '../../assets/img/linkAja.png';

const Payment = () => {
  return (
    <SafeAreaView style={style.containerPayment}>
      <StatusBar backgroundColor={StatusColor.gray} />
      <ScrollView style={style.scrollPayment}>
        <View style={style.flexRow}>
          <Image source={Goride} marginLeft={10} />
          <Text style={style.title}>Terima Kasih!</Text>
        </View>
        <View style={style.contentCard}>
          <View style={style.flexRow}>
            <Text style={style.titleSame}>Dibayar pakai</Text>
            <Text style={style.titleLink}>Link Aja</Text>
          </View>
          <View style={style.contentPay}>
            <Image source={Linkaja} style={style.imageLinkaja} />
            <Text style={style.pay}>Rp15.000</Text>
          </View>
        </View>
        <View
          style={style.contentIncome}>
          <View
            style={style.flexJustify}>
            <Text style={style.titleSame}>Pendapatan</Text>
            <Text
              style={style.titleSameOne}>
              Rp12.000
            </Text>
          </View>
          <View
            style={style.flexJustify}>
            <Text style={style.titleSame}>Poin</Text>
            <Text
              style={style.titleSameOne}>
              +1
            </Text>
          </View>
        </View>
        <View
          style={style.contentCustomer}>
          <Text style={style.textBooking}>GR120389109238</Text>
          <View style={style.contentBooking}>
            <Text style={style.customer}>
              Bagaimana costumer Anda?
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payment;
