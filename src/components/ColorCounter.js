import React from 'react';
import {View, StyleSheet,FlatList,Text,ToastAndroid,Image, Button} from 'react-native';


const ColorCounter = ({color,onIncrease,onDecrease}) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
            <Button title={`Decrease ${color}`} onPress={() => onDecrease()}/>
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


export default ColorCounter;
