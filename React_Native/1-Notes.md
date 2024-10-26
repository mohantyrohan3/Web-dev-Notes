1. Making Project - npx react-native@latest init AwesomeProject
You can also use expo
2. Starting the app - npm start   ||     npx react-native run-android
npm start --deviceId=44d8a9c2  // for running on personal phn
3. Incase of sdk not found error just make a local.properties file and inside it just write sdk.dir = "the android sdk path "

Start with making App.js and make react functional component

View - Component for wrapping like 5 different compo , Behaves like div in web
Text - text components
SafeAreaView - 


import { View , SafeAreaView , Text } from 'react-native'

import React from 'react'

export default function App() {
  return (
    <>
    <SafeAreaView>
      <View>
        <Text>
          Hello World
        </Text>
      </View>

    </SafeAreaView>
    </>
  )
}


Styling React Native Apps
You can also write style = {{  }}
Inline Styles and StyleSheet Api
StyleSheet

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#92a8d1',
        fontFamily:'fangsong'
    }
})

for using multiple styles , use style = {[styles.box , styles.backg])


All Components

View - height , width , color , padding , margin , 
Button - <Button title="Press Here"></Button> , onPress , color , 
Text - color
Image - <Image source={imageLogo}/>  , width , height , resizeMode
<Image source={{
        uri:'https://picsum.photos/200'
    }}  style={{height:300 , width:300}}/>

ImageBackground

ScollView - Ensure it has a bounded height (horizontal = true) for horizontal scolling

Pressable - Is a wrapper component that detects various stages of press interactions on its defined children
Pressable - onPress , onPressIn (press is activated) , onLongPress(press is longer than 500 ms)

Modal - visible={state} , onRequestClose(back button close) , animationType(slide , fade) , presentationStyle(for ios)

StatusBar - allows you to control the app status bar - backgroundColor(andorid) , barStyle , hidden , 

ActivityIndicator - displays a circular loading indicator -  size(large , small) , color , animating ,


Alert Api 
 <Button
            title='Press Here'
            onPress={()=> Alert.alert("Invalid Data" , 'DOB' ,[
                {
                    text:'Cancel',
                    onPress: ()=> console.log("Cancel Pressed")
                },
                {
                    text:'OK',
                    onPress: ()=> console.log("OK pressed")
                }
            ])}
/>


const styles = StyleSheet.create({
    container: {

    },

})

style = {styles.container}

Style Properties
1. height , width - percentage 
2. borderWidth , borderColor , borderStyle , borderRadius
3. Box Shadow (only for ios) - shadowcolor , shadowOffset(object) , shadowOpacity , shadowRadius , 
4. Elevation (android) - elevation

There is no inheritance in these styles except text sub trees


Layout with FlexBox

1. main axis (vertical , up to down) , cross axis (horizontal)
2. flex - how much of a view will fill the screen along main axis (>= 0)
3. flexDirection (column(default) , row , row-reverse)
4. justifyContent (along main axis - center , flex-start , space-between ,space-around ,  )
5. alignItems(along cross axis) - center , stretch(default)
6. alignSelf (for individual items along cross axis)
7. flexWrap
8. alignContent - for multiple columns or row along cross axis
9. gap(manage spacing between row and columns) rowGap , columnGap , gap
10. flexShring and flexGrow


Dimensions Api

const windowWidth  = Dimensions.get("window").width
same for windowHeight

height :  windowheight > 500 ? "70%" : "50%"  // responsive ui

useWindowDimensions() // recommended

Linking , Touchable Opactity Or Pressable 

Flatlist(smooth scolling , lazy loading)  , ItemSeparatorComponent , ListEmptyComponent , ListHeaderComponent , ListFooterComponent , refreshing , onRefresh

SectionType


Inputs and Forms

The coreRn lib only provides textInput and Switch 

TextInput - value , onChageText , placeholder , secureTextEntry , keyboardType(email/password/number) , autoCorrect , autoCapitalize , 

For multiline input just include multiline prop 

Switch - value , onValueChange , trackColor(object) , thumbColor , 

KeyboardAvoidingView - behavior , keyboardVerticalOffset , 

Refresh functionality in flatList component
--------------------------------------------------------------------------------------------------------------------------
REACT NAVIGATION

npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context

Stack , Drawer , Tab Navigators

Stack Navigation - Each new screen is toped on the previous one
Native Stack Navigator - install it first

const Stack = createNativeStackNavigator();
 <NavigationContainer>
<Stack.Navigato intialRouteName = "About" >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
</NavigationContainer>

// Navigating between screens
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );


Passing Data
1. every fun component accepts a route parameter  , we can then use it as route.params and sent the data through  navigation.navigate('Details' , {name : "Rohan"})}
2. for default intialParams = {{ }}
3. for updating the params navigation.setParams({})

Stack navigation options 

screen options = {{headerShown}}
<Stack.Screen name="Home" component={Home} 
options = {{  title : "Welcome Home" , headerStyle , headerTintColor , headerTitleStyle , headerRight: ()=>{
    pressable
}
/>