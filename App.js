import React from 'react';
import { StyleSheet, TouchableOpacity, Text, TextInput, View, ImageBackground, Image, Dimensions} from 'react-native';
import bgImage from './images/back.jpeg'
import logo from './images/lg.png'

const {width: WIDTH}  = Dimensions.get('window')

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}/>
          <Text style={styles.logoText}>JONJON - GAME</Text>
        </View>
        <View>
        <TextInput 
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underLineColorAndroid='transparent'
          />
        </View>


        <View>
        <TextInput 
          style={styles.input}
          
          placeholder={'Password'}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underLineColorAndroid='transparent'
        />
        </View>

        <TouchableOpacity style={styles.btnLogin} >
          <Text style={styles.text} >LOGIN</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
      alignItems: 'center' 
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5,     
  },
  logo: {
    width: 120,
    height: 120,
  },
  input:{
    marginTop: 10,
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45, 
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  btnLogin: {
    marginTop: 10,
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25, 
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center',
  }

});
