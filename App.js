import React from 'react';
import { StyleSheet, TouchableOpacity, Text, TextInput, View, ImageBackground, Image, Dimensions} from 'react-native';
import bgImage from './images/back.jpeg'
import logo from './images/lg.png'
import Icon from 'react-native-vector-icons/Ionicons';

const {width: WIDTH}  = Dimensions.get('window')

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      showPass: true,
      press: false
    }
  }

  showPass = () => {
    if(this.state.press == false) {
      this.setState({showPass: false, press: true})
    } else {
      this.setState({showPass: true, press: false})
    }
  }
  
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}/>
          <Text style={styles.logoText}>JONJON - GAME</Text>
        </View>

        <View style={styles.inputContainer}>
        <Icon name={'ios-person'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/>
        <TextInput 
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underLineColorAndroid='transparent'
          />
        </View>


        <View style={styles.inputContainer}>
        <Icon name={'ios-lock'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon}/>
        <TextInput 
          style={styles.input}
          secureTextEntry={this.state.showPass}          
          placeholder={'Password'}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underLineColorAndroid='transparent'
        />
        <TouchableOpacity style={styles.btnEyes} onPress={this.showPass.bind(this)}>
          <Icon name={ this.state.press == false ? 'ios-eye' : 'ios-eye-off'} size={26} color={'rgba(255, 255, 255, 0.7)'}/>
        </TouchableOpacity>
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
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25, 
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  inputContainer:{
    marginTop: 10,
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
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 40,  
  },
  btnEyes:{
    position: 'absolute',
    top: 8,
    right: 40,  

  }

});
