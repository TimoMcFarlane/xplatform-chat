import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import XCHeader from './common/XCHeader';
import SideMenu from '../SideMenu';

const testData = ["Chat one", "Chat two", "Chat three", "Chat four"];
const testData2 = ["Charlie", "George", "Mary", "Lily"];

export default class ChatContainer extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <XCHeader />
        <FlatList 
          style={styles.flatlist}
          data={testData}
          renderItem={({item}) => (
            <View style={styles.list}>
              <Text style={styles.item}>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => `chat-${index}`}
        />
        <SideMenu>
        <FlatList 
          style={styles.contacts}
          data={testData2}
          renderItem={({item}) => (
            <View style={styles.list}>
              <Text style={styles.item}>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => `contact-${index}`}
        />
        </SideMenu>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    minHeight:'100%',
    minWidth: '100%'
  },
  contacts: {
    width: '100%'
  },
  flatlist: {
    backgroundColor: 'black',
  },
  list: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    padding: 20,
    backgroundColor: 'white'
  },
  item: {
    maxHeight:50
  }
})