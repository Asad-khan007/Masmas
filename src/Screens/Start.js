import {Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import NavService from '../Config';
import Colors from '../Config/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Start = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: Colors.primary,
      }}>
      <View style={{flex: 2, alignItems: 'center', marginBottom: 15}}>
        <Text>Next World</Text>
      </View>
      <View
        style={{
          flex: 5,
          justifyContent: 'center',
          paddingTop: 18,
        }}>
        <Text>Hello world</Text>
      </View>

      <Text
        style={{
          marginTop: 60,
          color: Colors.white,
          fontSize: 15,
          fontWeight: '400',
          flex: 1,
        }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        quibusdam animi impedit ?
      </Text>

      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          paddingBottom: 8,
        }}>
        <TouchableOpacity onPress={() => NavService.navigate('PreLogin')}>
          <Text>Get Started !</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Start;
