import React, {useReducer} from 'react';
import {View, StyleSheet,FlatList,Text,ToastAndroid,Image, Button} from 'react-native';
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREASE = 15;

const reducer = (state,action) => {
    // state === {red : 0, blue : 0, green: 0}
    // action === {colorToChange : red || green || blue, amount : 15 || -15} 
    switch(action.colorToChange){
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : {...state,red:state.red + action.amount};
        case 'blue': 
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state :  {...state,blue:state.blue + action.amount};
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 ? state :  {...state,green:state.green + action.amount};
        default:
            return state;
    }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer,{red : 0, blue : 0, green: 0});
    // state === {red : 0, blue : 0, green: 0}
    //dispatch === runMyreducer....
    const {red,blue,green} = state;
    

    return (
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({colorToChange: 'red', amount:  COLOR_INCREASE})}
                onDecrease={() => dispatch({colorToChange: 'red', amount:  -1 * COLOR_INCREASE})}
                color="red"  />
            <ColorCounter 
                onIncrease={() => dispatch({colorToChange: 'blue', amount:  COLOR_INCREASE})}
                onDecrease={() => dispatch({colorToChange: 'blue', amount:  -1 * COLOR_INCREASE})}
                color="blue"/>
            <ColorCounter 
                onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_INCREASE})}
                onDecrease={() => dispatch({colorToChange: 'green', amount:  -1 * COLOR_INCREASE})}
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
