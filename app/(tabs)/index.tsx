import { StyleSheet, ScrollView, FlatList  } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import List from '../../components/List';
import { Text, View,} from '../../components/Themed';

const arr : number[] = [];
for (let i = 0; i < 100; i++) {
  arr.push(i);
}

export default function TabOneScreen() {
  return (
    <View>
       <FlatList
      keyExtractor={item => item.toString()}
      data={arr}
      renderItem={({item}) => <List num={item} />}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
