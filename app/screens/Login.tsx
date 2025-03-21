import { View, Text,StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true)
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response)
        }catch (error: any) {
            console.log(error)
            alert('Sign in failed: '+ error.message)
        }finally {
            setLoading(false)
        }
    }

    const signUp = async () => {
        setLoading(true)
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response)
        }catch (error: any) {
            console.log(error)
            alert('Sign in failed: '+ error.message)
        }finally {
            setLoading(false)
        }
    }
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>

                <TextInput 
                    style={styles.input}
                    placeholder='Email'
                    autoCapitalize='none'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                ></TextInput>
                <TextInput 
                    style={styles.input}
                    placeholder='Password'
                    autoCapitalize='none'
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                ></TextInput>

                {loading ? <ActivityIndicator size="large" color="#000ff"/>
                        : 
                        <View style={styles.buttons}>
                            <Button title="Login" onPress={signIn}></Button>
                            <Button title="Create account" onPress={signUp}></Button>
                        </View>
                }
            </KeyboardAvoidingView>
        </View>
    )
    }

    export default Login

    const styles = StyleSheet.create({
        container: {
            marginHorizontal: 20,
            flex: 1,
            justifyContent: 'center'
        },
        input: {
            marginVertical: 4,
            height: 50,
            borderWidth: 1,
            borderRadius: 4,
            padding: 10,
            backgroundColor: '#fff'
        },
        buttons: {
            display: 'flex',
            flexDirection: 'column',
            gap: 3
        }
    })