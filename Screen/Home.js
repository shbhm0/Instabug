import React from 'react';
import {View, Text, Button} from 'react-native';
import Instabug from 'instabug-reactnative';
import {APM} from 'instabug-reactnative';
import {NetworkLogger} from 'instabug-reactnative';
APM.setAppLaunchEnabled(true);
Instabug.setTrackUserSteps(true);
NetworkLogger.setRequestFilterExpression(
  "network.requestHeaders['accept'] === 'application/json'",
);
NetworkLogger.setNetworkDataObfuscationHandler(async networkData => {
  networkData.requestHeaders = {
    'Content-Type': 'application/json',
    TestHeader: 'some-header2',
  };
  return networkData;
});
NetworkLogger.setNetworkDataObfuscationHandler(async networkData => {
  networkData.response = {};
  return networkData;
});
NetworkLogger.setProgressHandlerForRequest((total, loaded) => {});
APM.setNetworkEnabledIOS(true);
Instabug.logVerbose('Message to log');
Instabug.logInfo('Message to log');
Instabug.logDebug('Message to log');
Instabug.logError('Message to log');
Instabug.logWarn('Message to log');
APM.startExecutionTrace('name')
  .then(trace => {
    //
    // Your code goes here
    //

    trace.end();
  })
  .catch(error => {
    console.log(error);
  });
export default class App extends React.Component {
  constructor(props) {
    super(props);
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
    // throw new Error('Alok------');
    fetch(
      'https://spotifystefan-skliarovv1.p.rapidapi.com/addTracksToPlaylist',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'x-rapidapi-host': 'Spotifystefan-skliarovV1.p.rapidapi.com',
          'x-rapidapi-key': 'SIGN-UP-FOR-KEY',
        },
        body: {
          userId: '<REQUIRED>',
          accessToken: '<REQUIRED>',
          playlistId: '<REQUIRED>',
          uris: '<REQUIRED>',
        },
      },
    )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello Guyyyyyysssss</Text>

        <Button
          title="Go to Next Screen"
          onPress={() => {
            this.props.navigation.navigate('NextScreen', {
              value: 'Home prop',
            });
          }}
        />
      </View>
    );
  }
}
