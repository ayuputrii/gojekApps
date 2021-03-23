import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import style from './style';
import {MenuHome, FiturHome, StatusColor} from '../../components';
import IconPay from '../../assets/svg/bayar.svg';
import IconTopup from '../../assets/svg/topup.svg';
import IconEksplor from '../../assets/svg/eksplor.svg';
import Gopay from '../../assets/svg/gopay.svg';
import IconSearch from '../../assets/icon/search.png';
import IconUser from '../../assets/svg/user.svg';
import iklanGpay from '../../assets/img/iklan-gopay.jpg';

const Home = props => {
  return (
    <SafeAreaView style={style.containerHome}>
      <StatusBar backgroundColor={StatusColor.green} />
      <MenuHome />
      <ScrollView style={style.scrollHome}>
        <View style={style.contentHome}>
          <View style={style.flexOne}>
            <TextInput
              placeholder="What do you think to eat?"
              placeholderTextColor="black"
              style={style.TextInputOne}
            />
            <Image source={IconSearch} style={style.searchOne} />
          </View>
          <View>
            <IconUser width={55} height={55} />
          </View>
        </View>
        <View style={style.cardHome}>
          <View style={style.contentCard}>
            <View style={style.contentCardOne}>
              <View style={style.contentCard}>
                <Gopay width={15} height={15} marginTop={3} />
                <Text style={style.textGopay}>Gopay</Text>
              </View>
              <Text>Rp. 20.000</Text>
              <Text style={style.textHistory}>Klik & cek Riwayat</Text>
            </View>
            <View style={style.cardContent}>
              <IconPay width={20} height={20} />
              <Text style={style.textCard}>Bayar</Text>
            </View>
            <View style={style.cardContent}>
              <IconTopup width={20} height={20} />
              <Text style={style.textCard}>Top Up</Text>
            </View>
            <View style={style.cardContent}>
              <IconEksplor width={20} height={20} />
              <Text style={style.textCard}>Explor</Text>
            </View>
          </View>
        </View>
        <View style={style.contentIklan}>
          <View style={style.flexColumn}>
            <Text style={style.textIklan}>Konten buat kamu</Text>
            <View style={style.sponsorScroll}>
              <Text style={style.textSponsorScroll}>Apa aja</Text>
              <Text style={style.textSponsorScroll}>COVID-19</Text>
              <Text style={style.textSponsorScroll}>Donasi</Text>
              <Text style={style.textSponsorScroll}>Makanan</Text>
              <Text style={style.textSponsorScroll}>J3K</Text>
            </View>
          </View>
          <View style={style.contentTop}>
            <Text style={style.contentPrioritas}>
              Psst... Keamanan kamu prioritas kami.
            </Text>
            <Text style={style.title}>
              Deretan Rekan Usaha GoPay dengan protokol kebersihan buat belanja
              bulanan hingga beli vitamin harian !
            </Text>
            <Image source={iklanGpay} style={style.sponsorGopay} />
          </View>
        </View>
      </ScrollView>
      <FiturHome navigation={props.navigation} />
    </SafeAreaView>
  );
};

export default Home;
