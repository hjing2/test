import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';

function OnBoarding({ navigation }) {

  const { width } = Dimensions.get('window'); 
  const isWideScreen = width > 600;

  function renderBackground() {
    return (
      <ImageBackground
        source={require('../../assets/bkg_pics/onboardingbkg.jpeg')}
        style={styles.backgroundImage}
      />
    );
  }

  function renderImage() {
    return (
      <View style={styles.iconContainer}>
        <Image 
          source={require('../../assets/bkg_pics/onboardingIcon.png')}
          style={styles.featuredImage}
        />
      </View>
    );
  }

  function renderDescription() {
    return (
      <View>
        <Text style={styles.text}>Explore, Connect, Innovate</Text>
        <Text style={styles.text}>Your adventure starts here!</Text>
      </View>
    );
  }

  function renderButton() {
    return (
      <TouchableOpacity
        style={styles.onboardingButton}
        onPress={() => navigation.navigate('BottomTabBar')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      backgroundColor: '#D8D8D8',
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundImage: {
      position: "absolute",
      width: "100%",
      height: "100%",
      resizeMode: "stretch",
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
      textAlign: 'center',
      color: '#16343F'
    },
    iconContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    featuredImage: {
      width: isWideScreen?'40%':'70%',
      height: isWideScreen? 400:300,
      marginBottom: 30,
    },
    onboardingButton: {
      width: '40%',
      backgroundColor: '#fff',
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 50,
      elevation: 3, // Adds shadow on Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#5683b0',
    }
  });
  

  return (    
    <View style={styles.container}>
      {renderBackground()}
      {renderImage()}
      {renderDescription()}
      {renderButton()}
    </View>
  );
}

export default OnBoarding;

