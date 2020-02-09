import React,{useState} from 'react';
import { StyleSheet, Text, View,Button, TouchableOpacity } from 'react-native';
import ProductList from './app/component/productList'

export default function App() {
    const [title] = useState('My Native App')
   const [outputText, setOutputText] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>{title}</Text>
      <ProductList/>
      <Text>{outputText}</Text>
      <Button title="Counter" 
        style={styles.buttons} onPress={() => setOutputText(outputText+1)}/>
      <TouchableOpacity  style={styles.buttons}
      onPress={() => setOutputText(outputText-1)}
      >
          <Text>Touch Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainHeading:{
    marginTop:50,
    color:'hotpink',
    fontSize:30
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons:{
    backgroundColor:'olive',
    borderColor:'black',
    color:'white',
    fontSize:30,
    borderStyle:'solid',
  }
});
