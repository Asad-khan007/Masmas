import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import AppBackground from '../Components/AppBackground';
import {Colors, Metrix} from '../Config';
// import AppBackground from '../Components/AppBackground';

const Mobile = () => {
  return (
    <AppBackground back title={'Sign up'} marginHorizontal profile={false}>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: Metrix.FontExtraLarge,
            color: Colors.white,
            fontWeight: 'bold',
            marginTop: Metrix.VerticalSize(50),
            marginHorizontal: 20,
          }}>
          Register with mobile
        </Text>
        <Text
          style={{
            color: Colors.offWhite,
            marginTop: Metrix.VerticalSize(16),
            marginHorizontal: 20,
          }}>
          please type your number, then we'll send a verification code for
          authentication
        </Text>
        <View
          style={{
            marginHorizontal: Metrix.HorizontalSize(30),
            marginTop: Metrix.VerticalSize(40),
            // alignItems: 'center',
          }}>
          <Text style={{color: Colors.offWhite}}>Mobile Number</Text>
        </View>
        <TextInput
          placeholderTextColor={Colors.offWhite}
          placeholder="please enter password"
          style={{
            backgroundColor: Colors.black,
            marginHorizontal: Metrix.HorizontalSize(26),
            marginTop: 12,
            borderRadius: 12,
            height: Metrix.VerticalSize(50),
            paddingLeft: 20,
            color: Colors.offWhite,
            // width: '90%',
          }}
        />
      </View>
    </AppBackground>
  );
};

export default Mobile;

const styles = StyleSheet.create({});
