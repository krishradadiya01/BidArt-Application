import { View, Text, DimensionValue } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen;