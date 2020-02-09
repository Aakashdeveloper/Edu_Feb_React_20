import React, {useState,useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native'
const url = 'http://localhost:8900/product';
import json from '../db.json'

function ProductList(){
    const [data,setdata] = useState(json)

    useEffect(() => {
        fetch(url)
        .then((ress) => ress.json())
        .then((res) => {
            setdata(res)
        })
    },[data])

    return(
            <ScrollView style={styles.listContainer}>
                <Text>Product List</Text>
                <View>
                    {data.map((item,key) => {
                        return(
                            <View key={key}>
                                <Image
                                style={styles.placeImage}
                                source={{uri:item.image}}/>
                                <Text>{item.name}</Text>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>

    )
}

const styles = StyleSheet.create({
    placeImage:{
        height:200
    },
    listContainer:{
        width:"60%"
    }
})
export default ProductList;