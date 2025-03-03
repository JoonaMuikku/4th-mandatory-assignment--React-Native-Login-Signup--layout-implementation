import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const SignupView = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');



  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => router.navigate('/site/LoginView')} 
        style={styles.backButton}
      >
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>

      <View style={styles.centeredContent}>
        <Text style={styles.title}>Create Account</Text>

        <View style={styles.inputContainer}>
          <MaterialIcons name="person" size={20} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

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

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={20} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>SIGN UP ➔</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        onPress={() => router.push('/site/LoginView')} 
        style={styles.signUpLink}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.grayText}>Already have an account? </Text>
          <Text style={styles.orangeText}>Sign In</Text>
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
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  backIcon: {
    fontSize: 24,
    color: 'grey',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  
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
    color: "gray",
    fontWeight: "bold"
  },
  loginButton: {
    backgroundColor: '#FFA500',
    width: 135,
    height: 40,
    borderRadius: 30,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 3,
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

export default SignupView;