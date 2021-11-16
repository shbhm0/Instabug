import React from 'react';
import {View, Text} from 'react-native';
import Instabug from 'instabug-reactnative';
export default class App extends React.Component {
  constructor() {
    super();
    Instabug.start('7f8fee3458928ceba7c2f2f0a0a5a327', [
      Instabug.invocationEvent.shake,
      Instabug.invocationEvent.screenshot,
    ]);
  }
  render() {
    // try {
    //   throw new SyntaxError();
    // } catch (error) {
    //   alert(error.name);
    //   Instabug.reportJSException(error);
    // }
    throw new Error('Alok------');
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello Guyyyyyysssss</Text>
      </View>
    );
  }
}
