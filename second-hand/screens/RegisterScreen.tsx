import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation,NavigationProp } from '@react-navigation/native';

type NavigationParams = {
    Main: undefined; // 'Register' 스크린에 전달할 파라미터가 있다면 여기에 정의
};
  
type NavigationType = NavigationProp<NavigationParams, 'Main'>;

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<NavigationType>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>회원가입 페이지</Text>
      <Button
        title="회원가입"
        onPress={() => {
          // 여기에 회원가입 처리 로직을 추가하세요.
          // 가입 성공 후에 MainScreen으로 이동하도록 수정하세요.
          navigation.navigate('Main');
        }}
      />
    </View>
  );
}

export default RegisterScreen;
