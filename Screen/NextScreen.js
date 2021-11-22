import React from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';

export default function Home({navigation}) {
  throw new Error('Next screeen error');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Next</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => {
          navigation.navigate('Home', {
            value: 'Next',
          });
        }}
      />
      <Text>Hello 3Alok Gahlot</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
