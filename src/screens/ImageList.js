import React from 'react';
import {View, StyleSheet,FlatList,Text} from 'react-native';
import ImageDetail from '../components/ImageDetails';


const ImageList = () => {
    return (
        <View>
            <ImageDetail tit="Dog Image" imgSrc={require('../../assets/beach.jpg')} />
            <ImageDetail tit="Cat Image" imgSrc={require('../../assets/forest.jpg')} />
            <ImageDetail tit="Big Image" imgSrc={require('../../assets/mountain.jpg')} />
            <ImageDetail tit="Hi Image" imgSrc={require('../../assets/beach.jpg')} />
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


export default ImageList;
