import React from 'react';
import { StyleSheet, Text, View,Button,ToastAndroid,TouchableOpacity} from 'react-native';



const ScreenComponent = ({navigation}) =>{
  return (
    <View style={styles.container}>
      <Text>It's really cool</Text>
      <Button onPress={() => navigation.navigate('List')} title="Go to components demo" />
      <Button onPress={() => navigation.navigate('Image')} title="Go to image demo" />
      <Button onPress={() => navigation.navigate('Square')} title="Go to Square demo" />
      <TouchableOpacity onPress={() => ToastAndroid.show("Good job",ToastAndroid.SHORT)}>
          <Text>Xin chao moi nguoi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent:'center'
  },
});

export default ScreenComponent;
