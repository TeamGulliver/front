import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// 네비게이션 파라미터 타입 정의 (RootStackParam에 따라 수정)
export type RootStackParam = {
  MainScreen: undefined;
};

// MainScreen 컴포넌트
const MainScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParam>>();

  // 로그아웃 처리 및 이전 스크린으로 이동
  const handleLogout = () => {
    // 여기에 로그아웃 처리 로직을 추가합니다.
    // ...

    // 로그아웃이 성공하면 이전 스크린으로 이동 (예: StartScreen)
    navigation.goBack(); // 이 부분을 알맞게 수정
  };

  return (
    <View style={styles.container}>
      <Text>메인 페이지</Text>
      <Button title="로그아웃" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;
