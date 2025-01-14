import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { globalStyles } from '../../styles/globalStyles';
import { appInfo } from '../../constants/appInfos';
import { appColors } from '../../constants/appColors';

const OnboardingScreen = ({ navigation }: any) => {
  const [index, setIndex] = useState(0);

  return (
    <View style={[globalStyles.container]}>
      <Swiper
        loop={false}
        onIndexChanged={(num) => setIndex(num)}
        index={index}
        activeDotColor={appColors.white}
      >
        <Image
          source={require('../../assets/images/onboarding-1.png')}
          style={styles.image}
        />
        <Image
          source={require('../../assets/images/onboarding-2.png')}
          style={styles.image}
        />
        <Image
          source={require('../../assets/images/onboarding-3.png')}
          style={styles.image}
        />
      </Swiper>

      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.text}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')
          }
        >
          <Text style={styles.text}>{index < 2 ? 'Next' : 'Finish'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: appInfo.sizes.WIDTH,
    height: appInfo.sizes.HEIGHT,
    resizeMode: 'cover',
  },
  bottomContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    position: 'absolute',
    bottom: 20,
    right: 20,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: appColors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
