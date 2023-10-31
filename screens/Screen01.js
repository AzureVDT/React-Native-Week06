import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Screen01() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
        <Image source={require('../assets/Screen01.png')} style={{marginTop: 82, marginLeft: 60,width: '271px', height: '271px', resizeMode: 'contain'}}></Image>
        <Text style={{color: '#8353E2', fontSize: '24px', fontWeight: '700', textAlign: 'center', marginTop: 42, width: 200, marginLeft: 60}}>MANAGER YOUR TASK</Text>
        <View style={{marginTop: '60px'}}>
        <TextInput placeholder='Enter your name' style={{paddingLeft: '30px', width: 334, height: 43, borderWidth: 1, borderColor: '#000', marginLeft: '28px'}}></TextInput>
        <Text style={{position:'absolute', top: 12, left: 30}}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 16.5L4 16.5C3.172 16.5 2.5 15.828 2.5 15L2.5 5C2.5 4.172 3.172 3.5 4 3.5L16 3.5C16.828 3.5 17.5 4.172 17.5 5L17.5 15C17.5 15.828 16.828 16.5 16 16.5Z" stroke="#171A1F" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.5 6.5L10 11L15.5 6.5" stroke="#171A1F" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </Text>
        </View>
        <Pressable style={{backgroundColor: '#00BDD6', marginTop: 20, width: 190, height: 44, alignItems:'center', justifyContent: 'center'}}>
            <Text style={{color: 'white'}}>{`GET STARTED ->`}</Text>
        </Pressable>
    </View>
  )
}