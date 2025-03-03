import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Please sign in to continue.</Text>

        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={20} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity 
          style={styles.forgotPassword} 
          onPress={handleForgotPassword}
        >
          <Text style={styles.orangeLink}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN ➔</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        onPress={() => router.navigate('/site/SignupView')} 
        style={styles.signUpLink}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.grayText}>Don't have an account? </Text>
          <Text style={styles.orangeText}>Sign Up</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -50, 
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "gray",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
  },
  icon: {
    paddingLeft: 8,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
    fontWeight: "bold",
    color: "gray",
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  orangeLink: {
    color: '#FFA500',
  },
  loginButton: {
    backgroundColor: '#FFA500',
    width: 135,
    height: 40,
    borderRadius: 30,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  signUpLink: {
    marginBottom: 20,
    alignSelf: 'center',
  },
  grayText: {
    color: 'gray',
  },
  orangeText: {
    color: '#FFA500',
    fontWeight: "bold"
  },
});

export default LoginView;