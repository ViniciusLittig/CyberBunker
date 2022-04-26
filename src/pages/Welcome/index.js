import React from 'react';
import { 
    View, 
    StyleSheet,
 } from 'react-native';

 import { useNavigation } from '@react-navigation/native'

 import LottieView from 'lottie-react-native';

export default function Welcome () {
    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <LottieView
                source={require('../../assets/doctor.json')}
                autoPlay 
                loop={false}
                onAnimationFinish={() => navigation.navigate('SignIn')}
            />
         </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2824ba',
        justifyContent: 'center',
        alignItems: 'center'
    }
})