import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Screen02() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('https://65409ea745bedb25bfc230af.mockapi.io/todo')
        .then(response => response.json())
        .then(json => setTodos(json))
  }, [])
  return (
    <View>
      {
        todos.map(todo => <Text key={todo?.id}>{todo?.username}</Text>)
      }
    </View>
  )
}

const styles = StyleSheet.create({})