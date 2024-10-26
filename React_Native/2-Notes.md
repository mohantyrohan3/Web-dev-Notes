1. Using Stack Navigator in curly braces

<PaperProvider>
      {/* <Login /> */}
      <NavigationContainer>
        {User.status == "Not Authenticated" ?

          (<Stack.Navigator>
            <Stack.Screen name="FirstScreen" component={FirstScreenRoute} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginRoute} options={{ headerShown: false }} />
            <Stack.Screen name="PoliceLogin" component={PoliceLoginRoute} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterRoute} options={{ headerShown: false }} />
          </Stack.Navigator>)
          :

          User.role === "Police" ?
            (<Stack.Navigator>
              <Stack.Screen name="PoliceUser" component={PoliceHomeRoute} options={{ headerShown: false }} />
              <Stack.Screen name="logout" component={Logout} options={{ headerShown: false }} />
              
            </Stack.Navigator>
            ) :
            (<Stack.Navigator>
              <Stack.Screen name="HomeUser" component={UserHomeRoute} options={{ headerShown: false }} />
              <Stack.Screen name="ChallanUser" component={ChallanUserRoute} options={{ headerShown: false }} />
            </Stack.Navigator>)
        }

      </NavigationContainer>
    </PaperProvider>


2. Using custom fonts in react native - https://dev.to/mitchiemt11/custom-fonts-in-react-native-pro-tip-4693

3. Always let the parent have the controls , whenever using a modal , provide controls through propss

4. To lock the screen orientation to potrait or landscape

For Android:
In the AndroidManifest.xml file, set the orientation for the main activity:

Open android/app/src/main/AndroidManifest.xml.
Add android:screenOrientation="portrait" to the <activity> tag.
xml
Copy code
<activity
  android:name=".MainActivity"
  android:screenOrientation="portrait" <!-- This locks the app in portrait mode -->
  android:label="@string/app_name"
  android:configChanges="keyboard|keyboardHidden|orientation|screenSize"
  android:windowSoftInputMode="adjustResize">
  <intent-filter>
    <action android:name="android.intent.action.MAIN" />
    <category android:name="android.intent.category.LAUNCHER" />
  </intent-filter>
</activity>


5. import { MaterialCommunityIcons } from 'react-native-paper'; For using icons in Bottom Navigation from React navigator

6. To Change logo and icon of app

To change the app name and logo in a React Native CLI app, follow these steps:

Change the App Name
Android:
Open the android/app/src/main/res/values/strings.xml file.
Look for the following line:
xml
Copy code
<string name="app_name">YourAppName</string>



Change the App Logo (App Icon)
You will need to replace the default icons for both Android and iOS:

Android:
Prepare your new app icon as a 1024x1024 image.
Go to android/app/src/main/res/ and replace the default app icons in the following folders with your new icons:
mipmap-hdpi
mipmap-mdpi
mipmap-xhdpi
mipmap-xxhdpi
mipmap-xxxhdpi
Each folder should contain an icon image named ic_launcher.png


7. To Build

cd android
./gradlew assembleRelease

Apk will be generated