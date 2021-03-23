import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import style from './style';
import Promo from '../../assets/svg/percent.svg';
import Home from '../../assets/svg/home.svg';
import Chat from '../../assets/svg/chat.svg';

const MenuHome = () => {
  return (
    <SafeAreaView>
      <View style={style.containerHome}>
        <View style={style.flexTwo}>
          <Promo />
          <Text style={style.styleText}>Promo</Text>
        </View>
        <View style={style.flexTwo}>
          <Home />
          <Text style={style.styleText}>Beranda</Text>
        </View>
        <View style={style.flexTwo}>
          <Chat />
          <Text style={style.styleText}>Chat</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MenuHome;
