import React from 'react';
import {View, StyleSheet,FlatList,Text,ToastAndroid,Image} from 'react-native';


const DisplayImage = ({tit,imgSrc}) => {
    return (
        <View>
            <Image source={imgSrc} />
           <Text onPress={() => ToastAndroid.show(tit,ToastAndroid.SHORT)}>{tit}</Text> 
        </View>
        
    );

};

const styles = StyleSheet.create({
    container : {
       // flex : 1
       height:50
    },
    item : {
        flex:1,
        marginHorizontal:10,
        padding:10,
        backgroundColor:'#ddd'   
    }

});


export default DisplayImage;
