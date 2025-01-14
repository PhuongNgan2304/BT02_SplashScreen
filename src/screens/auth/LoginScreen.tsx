import { View, Text, Button } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const handleLogin = async () => {
    await AsyncStorage.setItem('assetToken', 'trung');
    console.log('Token saved!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>LoginScreen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
