import { StyleSheet, Text, View,TextInput, Alert } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { useState } from 'react'
import Title from '../components/Title'

export default function GameStartScreen({onPress,onSendNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('')

    function resetHandler(){
      setEnteredNumber('')
    }
    function confirmHandler(){
         const choosenNumber = parseInt(enteredNumber)
         if(isNaN(choosenNumber)|| choosenNumber <= 0 || choosenNumber > 99){
           Alert.alert('Wrong Type Number', 'Number should be between 1-99',[{text:'OK', style:'destructive',onPress:resetHandler }])
           return
         }
         onSendNumber(choosenNumber)
    }
    function numberHandler(text){
     setEnteredNumber(text)
    }
  return (
    <View style={styles.container}>
      <Title>Number Guess App by erocode97</Title>
      <View style={styles.card}>
        <TextInput style={styles.input} keyboardType='number-pad' maxLength={2} onChangeText={numberHandler} value={enteredNumber}/>
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer} >
              <CustomButton onPress={resetHandler}>Clean</CustomButton>
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton onPress={confirmHandler}>Apply</CustomButton>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      padding:20,
    },
    card:{
        backgroundColor:'orange',
        alignItems:'center',
        justifyContent:'center',
        padding:16,
        marginTop:20,
        borderRadius:20,
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:6,
        shadowOpacity:0.25,
    },
    input:{
        borderBottomWidth:2,
        borderBottomColor:'yellow',
        width:50,
        height:50,
        marginVertical:10,
        fontSize:35,
        fontWeight:'bold',
    },
    buttonsContainer:{
        flexDirection:'row',
    },
    buttonContainer:{
        flex:1,
    }
})