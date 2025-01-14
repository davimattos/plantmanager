import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import colors from '../styles/colors';
import userImg from '../assets/gizele.jpg';
import fonts from '../styles/fonts';

export function Header(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.geeting}>Olá,</Text>
                <Text style={styles.userName}>Gizele</Text>
            </View>

            <Image source={userImg} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },

    geeting:{
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },

    userName:{
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }

})
