import React, {Component} from 'react';
import { 
  Keyboard, StyleSheet, View, 
  Image, TextInput, Button, 
  KeyboardAvoidingView, StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { editInput } from '../data/authenticationForm/actions';

const fields = {
  username: 'username',
  email: 'email',
  password: 'password'
}

class AuthenticationForm extends Component {
  
  render() {
    return (
      <View style={styles.parent}>
        <StatusBar barStyle="light-content"/>
        <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
          <View style={styles.coverWrapper}>
            <Image
              style={styles.coverImage}
              source={require('../../images/tile.jpg')}
            />
          </View>
          <View style={styles.wrapper}>
          
            <TextInput 
              onChangeText={(val) => this.props.editInput(fields.username, val)}
              style={styles.input} 
              placeholder={'Username'} 
            />
            <TextInput 
              onChangeText={(val) => this.props.editInput(fields.email, val)} 
              style={styles.input} 
              placeholder={'E-mail'} 
            />
            <TextInput 
              onChangeText={(val) => this.props.editInput(fields.password, val)} 
              style={styles.input} 
              placeholder={'Password'} 
              secureTextEntry 
            />
            <Button
              color={"white"}
              style={styles.btn}
              title={'Submit'}
              onPress={() => {
                Keyboard.dismiss();
                console.log(this.props.username);
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    username: state.authentication.username,
    email: state.authentication.email,
    password: state.authentication.password
  }
};

export default connect(mapStateToProps, { editInput })(AuthenticationForm);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    minWidth: '100%',
    minHeight: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    justifyContent: 'center',
    padding: 0,
  },
  coverWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  coverImage: {
    flex: 1,
    resizeMode: 'cover',
    width:'100%',
    height:'100%'
  },
  wrapper: {
    flex: 1,
    maxWidth: '80%',
    minWidth: 300,
    minHeight:350,
    maxHeight: '60%',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 40,
    backgroundColor: 'rgba(0,0,0,0.85)',
    borderRadius:5
  },
  input: {
    flex: 1,
    width: 250,
    maxHeight: 50,
    minHeight: 50,
    alignSelf: 'center',
    alignContent: 'flex-start',
    marginBottom: 30,
    backgroundColor: 'lightgray',
    padding:5,
    backgroundColor:'white',
    borderRadius: 5,
  },
  btn: {
    flex: 1,
    flexDirection:'row',
    minWidth: 150,
    width: 150,
    maxHeight: 50,
    minHeight: 50,
    backgroundColor:'yellow',
    borderRadius:5,
    borderWidth:2,
    borderColor:'black',
    color:'black',
    alignSelf:'flex-end',
  }
});