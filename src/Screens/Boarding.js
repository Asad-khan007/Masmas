import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState, useRef} from 'react';

import Colors from '../Config/colors';
import Swiper from 'react-native-swiper';
import {Metrix, NavService} from '../Config';
import CustomButton from '../Components/CustomButton';
import Images from '../Assetes';
import LinearGradient from 'react-native-linear-gradient';

const Boarding = () => {
  const swiperRef = useRef(null);
  const [visibal, setVisibal] = useState(false);
  const [fouced, setFouced] = useState(true);

  const [signInVisible, setSigninVisible] = useState(true);
  const [signupVisible, setSignupVisible] = useState(true);

  const [signinInputEmail, setSigninInputEmail] = useState('');
  const [signinInputPassword, setSigninInputPassword] = useState('');
  const [signupInputEmail, setSignupInputEmail] = useState('');
  const [signupInputPassword, setSignupInputPassword] = useState('');

  return (
    <>
      <Swiper
        ref={swiperRef}
        loop={false}
        dotStyle={{
          marginBottom: Metrix.VerticalSize(150),
          height: 12,
          width: 12,
          borderRadius: 6,
        }}
        activeDotStyle={{
          marginBottom: Metrix.VerticalSize(150),
          height: 12,
          width: 12,
          borderRadius: 6,
          backgroundColor: Colors.offWhite,
        }}
        style={styles.wrapper}>
        <View style={styles.container01}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={[
              '#235c47',
              Colors.backgroundColor,
              Colors.black,
              Colors.backgroundColor,
            ]}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}>
            <View style={styles.body01}>
              <Image source={Images.boarding01} />
              <Text style={styles.title01}>Trade Anytime Anywhere</Text>
              <Text style={styles.desc01}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </Text>
            </View>
            <CustomButton
              title={'Next'}
              onPress={() => {
                swiperRef.current?.scrollBy(1);
              }}
              buttonStyle={{
                width: '45%',
                top: Metrix.VerticalSize(80),
              }}
            />
          </LinearGradient>
        </View>

        {/*  Slider Container 02  */}
        <View style={styles.container01}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={[
              '#235c47',
              Colors.backgroundColor,
              Colors.black,
              Colors.backgroundColor,
            ]}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}>
            <View style={styles.body01}>
              <Image source={Images.boarding02} />
              <Text style={styles.title01}>
                Save and invest at the same time{' '}
              </Text>
              <Text style={styles.desc01}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Text>
            </View>
            <CustomButton
              title={'Next'}
              onPress={() => {
                swiperRef.current?.scrollBy(1);
              }}
              buttonStyle={{
                width: '45%',
                top: Metrix.VerticalSize(80),
              }}
            />
          </LinearGradient>
        </View>

        {/*  Slider Container 02  */}
        <View style={styles.container03}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={[
              '#235c47',
              Colors.backgroundColor,
              Colors.black,
              Colors.backgroundColor,
            ]}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}>
            <View style={styles.body01}>
              <Image source={Images.boarding03} />
              <Text style={styles.title01}>Transcat fast and easy</Text>
              <Text style={styles.desc01}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </Text>
            </View>
            <CustomButton
              title={'Next'}
              onPress={() => {
                setVisibal(true);
              }}
              buttonStyle={{
                width: '45%',
                top: Metrix.VerticalSize(80),
              }}
            />
          </LinearGradient>
        </View>
      </Swiper>

      {/* Registration Modal */}

      <Modal visible={visibal} style={{flex: 1}}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContBtn}>
            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => setVisibal(false)}>
              <Image source={Images.cross} style={{height: 26, width: 26}} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerContainer}>
            <View style={styles.selector}>
              <TouchableOpacity
                onPress={() => setFouced(!fouced)}
                style={{
                  // flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: fouced ? Colors.backgroundColor : null,
                  borderRadius: 12,
                  height: '120%',
                  width: '50%',
                }}>
                <Text
                  style={{
                    color: fouced ? Colors.offWhite : Colors.darkGray,
                    fontWeight: '400',
                  }}>
                  Sign in
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setFouced(!fouced)}
                style={{
                  // flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: !fouced ? Colors.backgroundColor : null,
                  height: '120%',
                  width: '50%',
                  borderRadius: 12,
                }}>
                <Text
                  style={{
                    color: !fouced ? Colors.offWhite : Colors.darkGray,
                    fontWeight: '400',
                  }}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Screen Modal Body */}

          {fouced && (
            <>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: Metrix.FontExtraLarge,
                  paddingLeft: 8,
                  margin: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                }}>
                Sign in
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: Metrix.HorizontalSize(30),
                  marginTop: Metrix.VerticalSize(18),
                  alignItems: 'center',
                }}>
                <Text style={{color: Colors.offWhite}}>Email</Text>
                <TouchableOpacity>
                  <Text style={{color: Colors.primary}}>
                    Sign in with email
                  </Text>
                </TouchableOpacity>
              </View>
              <TextInput
                placeholderTextColor={Colors.offWhite}
                placeholder="please enter email"
                value={signinInputEmail}
                onChangeText={text => {
                  setSigninInputEmail(text);
                }}
                style={{
                  backgroundColor: Colors.black,
                  marginHorizontal: Metrix.HorizontalSize(26),
                  marginTop: 12,
                  borderRadius: 12,
                  height: Metrix.VerticalSize(50),
                  paddingLeft: 20,
                  color: Colors.offWhite,
                }}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: Metrix.VerticalSize(260),
                  alignSelf: 'flex-end',
                  right: 50,
                  zIndex: 69,
                }}>
                <Image
                  source={Images.view}
                  style={{
                    height: 24,
                    width: 24,
                    tintColor: Colors.backgroundColor,
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  marginHorizontal: Metrix.HorizontalSize(30),
                  marginTop: Metrix.VerticalSize(40),
                  // alignItems: 'center',
                }}>
                <Text style={{color: Colors.offWhite}}>Password</Text>
              </View>
              <TextInput
                secureTextEntry={signInVisible}
                placeholderTextColor={Colors.offWhite}
                placeholder="please enter password"
                value={signinInputPassword}
                onChangeText={text => setSigninInputPassword(text)}
                style={{
                  backgroundColor: Colors.black,
                  marginHorizontal: Metrix.HorizontalSize(26),
                  marginTop: 12,
                  borderRadius: 12,
                  height: Metrix.VerticalSize(50),
                  paddingLeft: 20,
                  color: Colors.offWhite,
                }}
              />
              <TouchableOpacity
                style={{
                  height: Metrix.VerticalSize(50),
                  backgroundColor: Colors.primary,
                  marginHorizontal: Metrix.HorizontalSize(28),
                  borderRadius: 12,
                  marginTop: Metrix.VerticalSize(50),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: Colors.black,
                    fontWeight: '400',
                    fontSize: Metrix.FontMedium,
                  }}>
                  Sign in
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: Colors.offWhite,
                  fontSize: Metrix.FontSmall,
                  alignSelf: 'center',
                  marginTop: Metrix.VerticalSize(30),
                }}>
                or login with
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: Metrix.VerticalSize(30),
                }}>
                <TouchableOpacity
                  style={{
                    height: Metrix.VerticalSize(45),
                    backgroundColor: Colors.white,
                    width: Metrix.HorizontalSize(140),
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={Images.facebook}
                    style={{
                      height: 20,
                      width: 20,
                      marginRight: 6,
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: '600',
                    }}>
                    Facebook
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: Metrix.VerticalSize(45),
                    backgroundColor: Colors.white,
                    width: Metrix.HorizontalSize(140),
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={Images.google}
                    style={{
                      height: 20,
                      width: 20,
                      marginRight: 6,
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: '600',
                    }}>
                    Google
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginTop: Metrix.VerticalSize(55),
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.finger}
                  style={{
                    height: 40,
                    width: 40,
                  }}
                />
                <Text
                  style={{
                    color: Colors.darkGray,
                    marginTop: 16,
                  }}>
                  use finger instead?
                </Text>
              </View>
            </>
          )}
          {!fouced && (
            <>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: Metrix.FontExtraLarge,
                  paddingLeft: 8,
                  margin: 20,
                  fontWeight: 'bold',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                }}>
                Sign up
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: Metrix.HorizontalSize(30),
                  marginTop: Metrix.VerticalSize(18),
                  alignItems: 'center',
                }}>
                <Text style={{color: Colors.offWhite}}>Email</Text>
                <TouchableOpacity
                  onPress={() => {
                    NavService.navigate('mobile');
                  }}>
                  <Text style={{color: Colors.primary}}>
                    Register with mobile
                  </Text>
                </TouchableOpacity>
              </View>
              <TextInput
                placeholderTextColor={Colors.offWhite}
                placeholder="please enter email"
                value={signupInputEmail}
                onChangeText={text => {
                  setSignupInputEmail(text);
                }}
                style={{
                  backgroundColor: Colors.black,
                  marginHorizontal: Metrix.HorizontalSize(26),
                  marginTop: 12,
                  borderRadius: 12,
                  height: Metrix.VerticalSize(50),
                  paddingLeft: 20,
                }}
              />
              <View
                style={{
                  marginHorizontal: Metrix.HorizontalSize(30),
                  marginTop: Metrix.VerticalSize(40),
                  // alignItems: 'center',
                }}>
                <Text style={{color: Colors.offWhite}}>Password</Text>
              </View>
              <TextInput
                placeholderTextColor={Colors.offWhite}
                secureTextEntry={signupVisible}
                placeholder="please enter password"
                value={signupInputPassword}
                onChangeText={text => setSignupInputPassword(text)}
                style={{
                  backgroundColor: Colors.black,
                  marginHorizontal: Metrix.HorizontalSize(26),
                  marginTop: 12,
                  borderRadius: 12,
                  // padding: 16,
                  height: Metrix.VerticalSize(50),
                  paddingLeft: 20,
                  color: Colors.offWhite,
                }}
              />
              <TouchableOpacity
                style={{
                  height: Metrix.VerticalSize(50),
                  backgroundColor: Colors.primary,
                  marginHorizontal: Metrix.HorizontalSize(28),
                  borderRadius: 12,
                  marginTop: Metrix.VerticalSize(50),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: Colors.black,
                    fontWeight: '400',
                    fontSize: Metrix.FontMedium,
                  }}>
                  Sign up
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: Colors.offWhite,
                  fontSize: Metrix.FontSmall,
                  alignSelf: 'center',
                  marginTop: Metrix.VerticalSize(30),
                }}>
                or login with
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginTop: Metrix.VerticalSize(30),
                }}>
                <TouchableOpacity
                  style={{
                    height: Metrix.VerticalSize(45),
                    backgroundColor: Colors.white,
                    width: Metrix.HorizontalSize(140),
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={Images.facebook}
                    style={{
                      height: 20,
                      width: 20,
                      marginRight: 6,
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: '600',
                    }}>
                    Facebook
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: Metrix.VerticalSize(45),
                    backgroundColor: Colors.white,
                    width: Metrix.HorizontalSize(140),
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    borderRadius: 10,
                  }}>
                  <Image
                    source={Images.google}
                    style={{
                      height: 20,
                      width: 20,
                      marginRight: 6,
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: '600',
                    }}>
                    Google
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  container01: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
  },
  body01: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: Metrix.VerticalSize(100),
  },
  title01: {
    fontSize: 22,
    marginTop: 34,
    color: Colors.white,
  },
  desc01: {
    color: Colors.offWhite,
    marginTop: 6,
    fontSize: Metrix.FontSmall,
    paddingVertical: Metrix.VerticalSize(16),
    aspectRatio: 3,
    lineHeight: 25,
    textAlign: 'center',
  },
  container02: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
  },
  container03: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  modalContBtn: {
    padding: 10,
    paddingLeft: 15,
  },
  modalBtn: {
    width: Metrix.HorizontalSize(22),
    height: Metrix.VerticalSize(48),
    justifyContent: 'center',
  },
  headerContainer: {
    height: Metrix.VerticalSize(60),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  selector: {
    backgroundColor: Colors.black,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '75%',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
});

export default Boarding;
