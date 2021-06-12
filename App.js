import React from 'react'
import { View, Text } from 'react-native';
import Amplify from 'aws-amplify'
import config from './src/aws-exports.js'

Amplify.configure(config)

const App = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
}

export default App
