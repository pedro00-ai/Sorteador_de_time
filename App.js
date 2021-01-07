import React, {useState} from 'react';
import { ScrollView,TouchableHighlight,Text,StyleSheet,View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Clcb from './componentes/chooseFieldOrBall';
import Ss from './componentes/sortScreen';
import Home from './componentes/rules';
import E4 from './componentes/chooseFourOptions';
import SCO from './componentes/chooseOptions';

const Stack=createStackNavigator();

function screenFourOptions({navigation}){
    return(
    <View>
        <E4/>
    </View>
    )
}

function firstScreenOfChoose({navigation}){

    return(
    <View>
        <SCO/>
        <View>
            <TouchableHighlight

                onPress={()=>navigation.navigate('Time2')}
                style={styles.btnFour}
                
            >
                <Text style={styles.txtBtnFour}>Quatro jogadores!!</Text>
            </TouchableHighlight>
            <TouchableHighlight
            
                onPress={()=>navigation.navigate('Time')}
                style={styles.btnSix}
            >
                <Text style={styles.txtBtnSix}>Seis jogadores!!</Text>
            </TouchableHighlight>
        </View>
    </View>
    )
}

function chooseScreen({navigation}){
    return(
        <View>
            <Clcb/>
        </View>
    )
}

function sortScreen({navigation}){
    return(
        <View>
            <Ss/>
        </View>
    )
}

function home({navigation}){
    return(
    <ScrollView>
        <Home/>
        <View style={{flex:1, flexDirection:'row'}}>
            <TouchableHighlight 
                style={styles.buttonStyle} 
                onPress={()=>navigation.navigate('Tela')}>
                <Text style={styles.txtButton}>Sortear jogador!</Text>
            </TouchableHighlight>
            <TouchableHighlight 
                onPress={()=>navigation.navigate('Campo')}
                style={{borderWidth:2,borderRadius:10,textAlign:'center',backgroundColor:'#0ce',height:35,width:170,paddingLeft:5,marginHorizontal:5,marginTop:70,}}>
                <Text style={{fontWeight:'bold',color:'#009',fontSize:18,marginTop:4,}}>
                    Sortear campo ou bola!
               </Text>
        </TouchableHighlight>
        </View>
    </ScrollView>
    )
}

export default function App(){

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={home}
                    options={{title:"Tela inicial"}}
                />
                <Stack.Screen
                    name='Campo'
                    component={chooseScreen}
                    options={{title:'Tela para escolha de campo ou bola'}}
                />
                <Stack.Screen
                    name='Time'
                    component={sortScreen}
                    options={{title:"Tela de sorteo, lembre-se das regras!!"}}
                />
                <Stack.Screen
                    name='Tela'
                    component={firstScreenOfChoose}
                    options={{title:"Tela da escolha de telas..."}}
                />
                <Stack.Screen
                    name='Time2'
                    component={screenFourOptions}
                    options={{title:"Tela de sorteo, lembre-se das regras!!"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles=StyleSheet.create({
    txtButton:{
        fontSize:25,
        fontWeight:'bold',
        color:'#000'
    },
    buttonStyle:{
        borderWidth:2,
        borderRadius:10,
        textAlign:'center',
        backgroundColor:'#0ce',
        height:35,
        width:170,
        paddingLeft:5,
        marginHorizontal:5,
        marginTop:70,
    },
    btnOfChoose:{
        borderWidth:2,
        borderRadius:5,
        padding:10,
        alignItems:'center',
        backgroundColor:'#d2ff90',
    },
    txtBtnOfChoose:{
        fontSize:25,
        fontWeight:'bold',
    },
    btnFour:{
        backgroundColor:'#44444f',
        marginHorizontal:10,
        borderRadius:3,
        borderWidth:2,
        borderColor:'#ade978',
        alignItems:'center',
        justifyContent:'center',
        padding:13,
    },
    txtBtnFour:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
    },
    btnSix:{
        marginHorizontal:10,
        borderWidth:2,
        borderRadius:3,
        borderColor:'#7e7e7e',
        backgroundColor:'#ad47cf',
        alignItems:'center',
        justifyContent:'center',
        padding:13,
        marginTop:3,
    },
    txtBtnSix:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
    },
})