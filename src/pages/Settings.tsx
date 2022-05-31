import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

function Settings() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Pressable onPress={() => setCount(prev => prev + 1)}>
        <Text>{count}</Text>
      </Pressable>
    </View>
  );
}

export default Settings;
