import React from 'react';
import {View, StyleSheet,FlatList,Text} from 'react-native';


const RenderList = () => {
    const friend = [
        {name : 'friend #1'},
        {name : 'friend #2'},
        {name : 'friend #3'},
        {name : 'friend #4'},
        {name : 'friend #5'},
        {name : 'friend #6'},
    ];

    return (
       <FlatList style={styles.container}
        data={friend}
        renderItem={({item}) => {
            return (
                <Text style={styles.item}>{item.name}</Text>
            );
        }}
        keyExtractor={friend =>{
            friend.name
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        
         />
    );
}

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


export default RenderList;
