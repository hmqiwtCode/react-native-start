import React, {useState} from 'react';
import {View, StyleSheet,FlatList,Text,ToastAndroid,Image, Button} from 'react-native';
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREASE = 15;


const SquareScreen = () => {
    const [red,setRed] = useState(0);
    const [blue,setBlue] = useState(0);
    const [green,setGreen] = useState(0);

    const setColor = (color,value) => {
        switch(color){
            case 'red': 
                red + value > 255 || red + value < 0 ? null : setRed(red + value);
            return;
            case 'blue': 
                blue + value > 255 || blue + value < 0 ? null : setBlue(blue + value);
            return;
            case 'green': 
                green + value > 255 || green + value < 0 ? null : setGreen(green + value);
            return;
    
        }
    }

    return (
        <View>
            <ColorCounter 
                onIncrease={() => setColor('red', COLOR_INCREASE)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREASE)}
                color="red"  />
            <ColorCounter 
                onIncrease={() => setColor('blue', COLOR_INCREASE)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCREASE)}
                color="blue"/>
            <ColorCounter 
                onIncrease={() => setColor('green',COLOR_INCREASE)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREASE)}
                color="green"/>

            <View style={{height: 150, width: 150,marginTop:10,backgroundColor:`rgb(${red},${blue},${green})`}} />
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


export default SquareScreen;
