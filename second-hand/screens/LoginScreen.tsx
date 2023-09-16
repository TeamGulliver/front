import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation,NavigationProp } from '@react-navigation/native';


type NavigationParams = {
    Register: undefined; // 'Login' 스크린에 전달할 파라미터가 있다면 여기에 정의
  };
  
  type NavigationType = NavigationProp<NavigationParams, 'Register'>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NavigationType>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>로그인페이지</Text>
      <Button
        title="동의하고 시작하기"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

export default LoginScreen;