import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../database'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signIn, setSignIn] = useState(true)

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password).catch(error => {
            console.log('Something went wrong with User login', error)
        })
    }
    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email, password).catch(error => {
            console.log('Something went wrong with User login', error)
        })
    }

    const handleLoginState = () => {
        setSignIn(!signIn)
    }

    return signIn ? (
        <View>
            <View style={styles.textContainer}>
                <Text style={styles.welcomeText}>You need to login</Text>
                <Text style={styles.descriptionText}>To view your profile you need to be logged in</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.inputView}>
                    <Text style={styles.inputText}>Your email:</Text>
                    <TextInput placeholder='Email' value={email} onChangeText={(e) => { setEmail(e) }} style={styles.input} />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.inputText}>Your password:</Text>
                    <TextInput placeholder='Password' secureTextEntry value={password} onChangeText={(e) => { setPassword(e) }} style={styles.input} />
                </View>
                <View style={styles.inputView}>
                    <TouchableOpacity style={styles.inputButton} activeOpacity={0.7} onPress={() => handleLogin()}>
                        <Text style={styles.inputButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputView}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.signUp} onPress={() => handleLoginState()}>
                        <Text style={styles.signUpText}>Don't have an account? SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    ) : <View>
        <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>You need to create an account</Text>
            <Text style={styles.descriptionText}>To view your profile you need create account</Text>
        </View>
        <View style={styles.form}>
            <View style={styles.inputView}>
                <Text style={styles.inputText}>Your email:</Text>
                <TextInput placeholder='Email' value={email} onChangeText={(e) => { setEmail(e) }} style={styles.input} />
            </View>
            <View style={styles.inputView}>
                <Text style={styles.inputText}>Your password:</Text>
                <TextInput placeholder='Password' secureTextEntry value={password} onChangeText={(e) => { setPassword(e) }} style={styles.input} />
            </View>
            <View style={styles.inputView}>
                <TouchableOpacity style={styles.inputButton} activeOpacity={0.7} onPress={() => handleSignUp()}>
                    <Text style={styles.inputButtonText}>Create Account</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputView}>
                <TouchableOpacity activeOpacity={0.7} style={styles.signUp} onPress={() => handleLoginState()}>
                    <Text style={styles.signUpText}>Already have an account? SignIn</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    textContainer: {
        alignItems: "left",
        paddingVertical: 20
    },
    welcomeText: {
        fontSize: 22,
        fontFamily: 'Poppins_600SemiBold'
    },
    descriptionText: {
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'Poppins_400Regular',
        textAlign: "left"
    },
    form: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        flexDirection: 'column',
        gap: 8
    },
    inputView: {
        gap: 4
    },
    inputText: {
        color: '#0f0f0f',
        fontFamily: 'Poppins_500Medium'
    },
    input: {
        backgroundColor: '#f3f3f3',
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 4,
        color: '#0f0f0f',
        fontFamily: 'Poppins_400Regular',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputButton: {
        backgroundColor: '#f3f3f3',
        borderRadius: 4,
        padding: 8,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputButtonText: {
        color: '#0f0f0f',
        fontSize: 14,
        fontFamily: 'Nunito_600SemiBold'
    },
    signUp: {
        textAlign: 'right',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    signUpText: {
        color: '#0f0f0f',
        fontSize: 12,
        marginTop: 8,
        fontFamily: 'Nunito_700Bold'
    }
})