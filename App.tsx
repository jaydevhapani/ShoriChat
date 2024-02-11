import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/redux-toolkit/store'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './src/navigation/rootnavigation'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation/>
      </NavigationContainer>
    </Provider>
  )
}

export default App