import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PrimaryInput from './PrimaryInput';

export default function PasswordInput(props) {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <PrimaryInput
        {...props}
        secureTextEntry={hidden}
      />

      <TouchableOpacity
        onPress={() => setHidden(!hidden)}
        style={{
          alignSelf: 'flex-end',
          marginTop: -12,
          marginBottom: 18,
        }}
      >
        <Text style={{ color: '#2196F3', fontWeight: '700' }}>
          {hidden ? 'Show Password' : 'Hide Password'}
        </Text>
      </TouchableOpacity>
    </>
  );
}