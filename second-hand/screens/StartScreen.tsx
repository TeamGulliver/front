import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation,NavigationProp } from '@react-navigation/native';

type NavigationParams = {
    Login: undefined; // 'Register' 스크린에 전달할 파라미터가 있다면 여기에 정의
    Register: undefined; 
};
  
type NavigationType = NavigationProp<NavigationParams, 'Login'>;


const StartScreen: React.FC = () => {
    const navigation = useNavigation<NavigationType>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>시작페이지</Text>
      <Button
        title="로그인"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="회원가입"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

export default StartScreen;
