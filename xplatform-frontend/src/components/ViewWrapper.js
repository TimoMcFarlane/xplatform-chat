import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import AuthenticationForm from './AuthenticationForm';
import ChatContainer from './ChatContainer';
//import Socket from 'socket.io-client';


// If user is not logged in display : login / sign up

// If user is logged in: display chats.

class ViewWrapper extends React.Component {
  render() {
    let { loading, isLoggedIn } = this.props;
    
    if(!isLoggedIn) {
      // display login / signup screen
    }

    return (
      <View style={styles.container}>
        {
          !isLoggedIn && 
          <AuthenticationForm/>
        }
        {
          isLoggedIn &&
          <ChatContainer/>
        }
        {
          loading &&
          <View style={styles.loaderWrapper}><ActivityIndicator size="large" color="#ff00dc" /></View>
        }
      </View>
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
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    position:'absolute',
    top:0,
    left:0,
    width: '100%',
    height:'100%',
    backgroundColor: 'rgba(0,0,0,0.85)'
  }
});

const mapStateToProps = (state) => {
  return {
    loading: state.application.loading,
    isLoggedIn: state.application.isLoggedIn
  };
};

export default connect(mapStateToProps)(ViewWrapper);