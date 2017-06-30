'use strict';

import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, Text, Button, Image, PixelRatio, ToolbarAndroid,} from 'react-native';

class ThirdScreen extends Component {

    render() {
        let pic = {
            uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498106803694&di=619b6ed28226dd885df71c17d6aceff6&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fcc11728b4710b912c6ef73e1c9fdfc0392452286.jpg'
        };

        let Dimensions = require('Dimensions');

        return (
        <View style={styles.container}>
            <ToolbarAndroid
                title="发现"
                style={styles.toolbar} />

            <ScrollView style={styles.content}>
                <Text style={styles.welcome}>第三页！</Text>
                <Text style={styles.instructions}>To get started, edit index.android.js</Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}Shake or press menu button for dev menu.
                </Text>
                <Text style={styles.hTitle}>赵丽颖</Text>
                <Text style={styles.imgT}>
                    <Image source={pic} style={styles.imageStyles}/>
                </Text>
            </ScrollView>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        height: '100%',
    },
    content: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    toolbar: {
        backgroundColor: '#eeeeee',
        height: 56,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    hTitle: {
        textAlign: 'center',
        color: '#333333',
        margin: 10,
    },
    personTxt: {
        color: '#333333',
        margin: 10,
    },
    imgT: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    imageStyles: {
        width: (300 * PixelRatio.get()),
        height: (300 * PixelRatio.get()) / 1.6,
    },
});

export default ThirdScreen;
