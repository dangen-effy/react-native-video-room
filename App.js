import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar
} from 'react-native'

import {
  Colors
} from 'react-native/Libraries/NewAppScreen'
import WebRTC from './src/WebRTC'

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <View style={styles.body}>
          <WebRTC />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  }
})

export default App
