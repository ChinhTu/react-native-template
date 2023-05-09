import React, { useState } from 'react';
import {
  TextInput,
  View,
  TextInputProps,
  ViewStyle,
  TextStyle,
  StyleSheet,
  Text,
  StyleProp,
} from 'react-native';

type TypeValidation = 'email' | 'url' | 'phone' | 'slug' | undefined;

interface Props extends TextInputProps {
  icon?: JSX.Element;
  width?: number | undefined;
  height?: number | undefined;
  borderWidth?: number | undefined;
  style?: StyleProp<ViewStyle | TextStyle>;
  require?: string | undefined;
  label?: string | undefined;
  placeholder?: string | undefined;
  validation?: {
    type: TypeValidation;
    message: string | undefined;
  };
}

const TextInputCustom: React.FC<Props> = props => {
  const {
    width,
    height,
    borderWidth = 1,
    style,
    require,
    label,
    onChange,
    onBlur,
    onFocus,
    validation,
    icon,
    placeholder,
    ...rest
  } = props;

  const [isFocus, setFocus] = useState<boolean>(false);
  const [error, setError] = useState({
    isError: false,
    msg: require || '',
  });
  const [value, setValue] = useState('');

  return (
    <View>
      {label && <Text style={styles.label}>{label} :</Text>}
      <View
        style={[
          styles.wrap,
          {
            borderColor: error.isError ? 'red' : isFocus ? 'blue' : '#ccc',
            borderWidth,
          },
          style,
        ]}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <TextInput
          autoCorrect={false}
          placeholder={placeholder}
          onChange={e => {
            setValue(e.nativeEvent.text);
            setError(prev => ({ ...prev, isError: false }));
            typeof onChange === 'function' && onChange(e);
          }}
          value={value}
          onFocus={e => {
            setFocus(true);
            typeof onFocus === 'function' && onFocus(e);
          }}
          onBlur={e => {
            if (value.length === 0 && require) {
              setError({ isError: true, msg: require });
            } else {
              setError(prev => ({ ...prev, isError: false }));
              if (validation) {
                const data = regex(validation?.type, value);
                data === false && setError({ isError: true, msg: validation?.message! });
              }
            }
            setFocus(false);
            typeof onBlur === 'function' && onBlur(e);
          }}
          style={[
            styles.input,
            {
              width,
              height,
            },
          ]}
          {...rest}
        />
      </View>
      {error.isError && <Text style={styles.error}>{error?.msg}</Text>}
    </View>
  );
};
export const regex = (type: TypeValidation, str: string) => {
  switch (type) {
    case 'email':
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str);
    case 'url':
      return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
        str,
      );
    case 'phone':
      return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(str);
    case 'slug':
      return /^[a-z0-9]+(?:(?:-|_)+[a-z0-9]+)*$/.test(str);
    default:
      return str;
  }
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    padding: 4,
    alignItems: 'center',
  },
  label: {
    color: '#d5d5d5',
    marginBottom: 8,
    fontSize: 16,
  },
  icon: {
    marginHorizontal: 6,
  },
  input: {
    padding: 6,
    fontSize: 16,
  },
  error: {
    marginTop: 8,
    color: 'red',
  },
});

export default TextInputCustom;
