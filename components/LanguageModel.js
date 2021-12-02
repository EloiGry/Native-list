import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useState, useEffect } from 'react';

const LanguageModel = () => {
    const [languages, setLanguages] = useState(false)
    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
          .then(response => response.json())
          .then(data => setLanguages(data.languages))
    }, [])
    return (
        <View>
            <FlatList data={languages} renderItem={Language} />
        </View>
    );
};

    const Language = ({item}) => {
        console.log(item.name);
        return (
                <View>
                    <Text> {item.name}</Text>
                </View>
        )
    }

export default LanguageModel;
