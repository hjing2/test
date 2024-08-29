import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, SafeAreaView, TouchableOpacity, Linking } from 'react-native';

const AboutUs = ({ navigation }) => {

  const { width } = Dimensions.get('window'); 
  const isWideScreen = width > 600;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f9f9f9',
    },
    buttonContainer: {
      justifyContent: 'center',
     
    },
    backButton: {
      flexDirection: 'row',
      paddingVertical: 8,
      paddingHorizontal: 16,
      alignItems: 'center',
      width: '30%',
    },
    backIcon: {
      height: 15,
      width: 15,
      marginRight: 10,
    },
    backButtonText: {
      fontSize: 16,
      color: '#333',
    },
    scrollContainer: {
      padding: 20,
    },
    title: {
      marginTop: 20,
      fontSize: isWideScreen ? 32:24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#5683b0',
      alignSelf: 'center',
      justifyContent: 'center'
    },
    textContainer: {
      marginBottom: 20,
    },
    subtitle: {
      fontSize: isWideScreen ? 25:20,
      fontWeight: 'bold',
      color: '#5683b0',
      marginVertical: 10,
      textAlign: 'center'
    },
    content: {
      fontSize: isWideScreen ? 20:16,
      color: '#777',
      marginBottom: 10,
    },
    mffnIconsContainer: {
      marginTop: 20,
      marginBottom: 20,
      width: '80%', 
      alignSelf: 'center',
      justifyContent: 'center'
    },
    mffnIconsImage: {
      alignSelf: 'center',
      width: '100%',
      resizeMode: 'contain'
    },
    mediaListContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around'

    },
    mediaContainer: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    mffnIcon: {
      height: isWideScreen? 50:30,
      width: isWideScreen? 50:30,
      marginBottom: 5
    },
    iconText: {
      color: '#5683b0',
      fontSize: isWideScreen? 20:15
    },
    videoContainer: {
      marginBottom: isWideScreen ? 60:40,
      alignItems: 'center',
    },
    videoButton: {
      backgroundColor: '#5683b0',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    videoButtonText: {
      color: '#fff',
      fontSize: isWideScreen ? 20:16,
    },
    linkButton: {
      marginTop: 20,
      marginBottom: 10,
    },
    linkText: {
      fontSize: isWideScreen ? 20:16,
      color: '#1E90FF',
      textDecorationLine: 'underline',
    },
  });
  

  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>About Marten</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutUs;
