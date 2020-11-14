// This is going to display the update alert to update the app
import React, {useEffect} from 'react';
import {Alert, View, Platform, Linking, Text} from 'react-native';

const App = () => {
  useEffect(() => {
    Alert.alert(
      'Update Available',
      'There is an update required for Coding is Us! Please download it now.',
      [
        {
          text: 'Ok',
          onPress: () => {
            if (Platform.OS === 'ios') {
              Linking.openURL(
                'https://apps.apple.com/us/app/coding-is-us/id1532536501',
              );
            } else {
              Linking.openURL(
                'https://play.google.com/store/apps/details?id=com.CodingIsUs.CodingIsUs&hl=en&gl=US',
              );
            }
          },
        },
      ],
      {cancelable: false},
    );
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Please install required update
      </Text>
    </View>
  );
};

export default App;
