import React, { useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, ActivityIndicator, Modal, Pressable} from 'react-native';
import Country from './Country';
import LanguageModel from './LanguageModel';


const List = () => {
    const [countries, setCountries] = useState([])
    const [isModal, setIsModal] = useState(false)

    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
          .then(response => response.json())
          .then(data => setCountries(data))
    }, [])

    if (countries == null) {
        return <ActivityIndicator size="large" color="salmon" />
    } else {
        return (
            <>
                <Modal
                    transparent={true}
                    visible={isModal}
                    onClose={() => setIsModal(!isModal)}
                >
                    <Text> <LanguageModel /> </Text>
                    <Pressable
                        onPress={() => setIsModal(!isModal)}
                    >
                        <Text> Back to countries </Text>
                    </Pressable>
                </Modal>
                <View style={styles.container}>
                    <FlatList data={countries} renderItem={({item}) => <Country item={item} isModal={isModal} setIsModal={setIsModal} />} />
                </View>
            </>
        );
    }
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card : {
        borderWidth: 2,
        margin : 10,
        borderRadius : 10,
        padding : 20,
        backgroundColor : "salmon"
    }
  });

export default List;
