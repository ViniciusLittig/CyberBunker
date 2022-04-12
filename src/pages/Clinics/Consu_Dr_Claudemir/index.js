import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
 } from 'react-native';
 import DatePicker from 'react-native-datepicker';

 import * as Animatable from 'react-native-animatable'

 import { useNavigation } from '@react-navigation/native'

export default function Welcome () {
    const navigation = useNavigation();

    state = {
        data: ''
    }
    changeDate = (valor) => {
        this.setState({
            data: valor
        })
    }

    return (
        <View style={style.container}>

            <DatePicker
                formt="DD/MM/YYYY"
                style={ style.dateComponente}
                date={this.state.data}
                onDateChange={this.changeDate}
            />
          

            <Animatable.View delay={600} animation="fadeInUp" style={style.containerForm}>
                <Text style={style.title}>Consultório Médico Doutor Estáquio de Castro Melo!</Text>
                <Text style={style.text}></Text>

                <TouchableOpacity 
                style={style.button}
                onPress= { () => navigation.navigate('SignIn')}
                >
                    <Text style={style.buttonText} >Acessar</Text>
                </TouchableOpacity>

            </Animatable.View>
         </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2824ba'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#2824ba',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text: {
        color: '#a1a1a1'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#2824ba',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }
})