import LanguageModel from './LanguageModel';
import React, { useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, Modal, Pressable} from 'react-native';

const Country = ({ item, isModal, setIsModal }) => {
    return (
        <Pressable 
            style={styles.card}
            onPress={() => setIsModal(!isModal)}
        > 
            <Text> Name : {item.name}</Text>
            <Text> Capital : {item.capital}</Text>
            <Text> Region : {item.region}</Text>
        </Pressable> 
    )
}

export default Country;

const styles = StyleSheet.create({
    card : {
        borderWidth: 2,
        margin : 10,
        borderRadius : 10,
        padding : 20,
        backgroundColor : "salmon"
    }
  });