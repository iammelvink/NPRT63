import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import colors from '../../theme/colors';

export default function PrimaryInput({

  label,

  value,

  onChangeText,

  placeholder,

  keyboardType = 'default',

  secureTextEntry = false,

  autoCapitalize = 'none',

  error = '',

}) {

  const [focused, setFocused] = useState(false);

  return (

    <View style={styles.container}>

      <Text style={styles.label}>
        {label}
      </Text>

      <TextInput

        value={value}

        onChangeText={onChangeText}

        placeholder={placeholder}

        placeholderTextColor={colors.placeholder}

        keyboardType={keyboardType}

        secureTextEntry={secureTextEntry}

        autoCapitalize={autoCapitalize}

        onFocus={() => setFocused(true)}

        onBlur={() => setFocused(false)}

        style={[
          styles.input,
          focused && styles.focused,
          error && styles.errorBorder,
        ]}

      />

      {!!error && (
        <Text style={styles.error}>
          {error}
        </Text>
      )}

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    marginBottom: 20,

  },

  label: {

    color: colors.white,

    fontWeight: '700',

    marginBottom: 8,

  },

  input: {

    height: 58,

    borderRadius: 16,

    backgroundColor: colors.surface,

    borderWidth: 1,

    borderColor: colors.border,

    color: colors.white,

    paddingHorizontal: 18,

    fontSize: 16,

  },

  focused: {

    borderColor: colors.primary,

  },

  errorBorder: {

    borderColor: colors.danger,

  },

  error: {

    marginTop: 6,

    color: colors.danger,

    fontSize: 12,

  },

});