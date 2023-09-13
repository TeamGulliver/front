import { StyleSheet,Image } from 'react-native';
import { Text, View } from './Themed';

export default function List({num}:any) {
    return (
    <View style={styles.container}>
        <View style={{height:100,width:100,justifyContent: "center",
    alignItems: "center"}}>
        <Image source={require('../assets/images/test.jpeg')} style = {{height:100,width:100}} />
        </View>
      </View>
    );
  }

const styles : any = StyleSheet.create({
    container: {
        justifyContent: "center",
      borderBottomWidth: 1,
      height: 150,
      borderStyle: 'solid',
      backgroundColor: "white"
    },
    text: {
        color:"black",
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 50,
    },
});