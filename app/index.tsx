import { BorderRadius, Colors, Fonts, Spacing } from '@/constants/theme'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    type TextInputProps,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: Spacing.base,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: Fonts.size.heading,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: Spacing.base
  },
  innerContainer: {
    maxWidth: 320,
    width: '100%',
    gap: Spacing.xs,
  },
  textInputContainer: {
    gap: Spacing.xxs,
  },
  textInput: {
    height: 40,
    paddingHorizontal: Spacing.xs,
    borderWidth: 1,
    borderColor: Colors.gray[300],
    borderRadius: BorderRadius.sm,
  },
  textInputLabel: {
    color: Colors.gray[900],
  },
  loginBtn: {
    backgroundColor: Colors.secondary.base,
    padding: Spacing.base,
    borderRadius: BorderRadius.sm,
  },
  loginBtnDisabled: {
    backgroundColor: Colors.secondary.light,
  },
  loginBtnTxt: {
    fontWeight: 700,
    color: Colors.white[100],
    textAlign: 'center',
  },
})

type TextFieldProps = {
  label: string
} & TextInputProps

function TextField({ label, ...input }: TextFieldProps) {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputLabel}>{label}</Text>
      <TextInput {...input} style={styles.textInput} />
    </View>
  )
}

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const disabled = !username || !password

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.appName}>Pokedex</Text>
        <TextField
          label="Username"
          onChangeText={value => setUsername(value)}
        />
        <TextField
          secureTextEntry
          label="Password"
          onChangeText={value => setPassword(value)}
        />
        <TouchableOpacity
          style={[
            styles.loginBtn,
            disabled ? styles.loginBtnDisabled : undefined,
          ]}
          disabled={disabled}
          onPress={() => router.replace('/pokemons')}
        >
          <Text style={styles.loginBtnTxt}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
