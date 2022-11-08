
# JetDevs React Native Practice Test

Screens
- Login screen.
- Dashboard screen with bottom navigation:
    - There will be 2 tabs inside it:
        - Home
        - Favorite
        
Login Screen
- There will be three views.
    - Enter Email (Input Field)
    - Enter Password (Input Field)
    - Login (Button)
- Login button click → check the user input and allow login with the fixed email & password below.
- If email & password matched, open the dashboard screen with two tabs. (Email: reactnative@jetdevs.com , Password: jetdevs@123 )

Home Tab
- Random user API, load more (pagination), and pull to refresh.
- The following items should be in each item.
    - Profile picture
    - Name
    - Other details (optional, you can add them to make better UI)
    - Your favorite icon on the top right side.
- Provide a function to mark users as a favorite/unfavorite.
Favorite Tab
- Show your favorite users list.
- Provide an option to mark users as an unfavorite.

Technical Specifications
- Redux
- React hooks
- Random user API call: https://randomuser.me/api/?results=10
- For more details: https://randomuser.me
## Documentation

> Clone repository in local environment
```sh
clone https://github.com/tatva-harpal/jetDev-React-Native-Test.git
cd jetDev-React-Native-Test
```
> Install Dependencies
```sh
npm install
```
> Install Pods
```sh
cd ios
pod install
```
> Run App in android emulator
```sh
npm run android
```
> Run App in android emulator
```sh
npm run ios
```
## Screenshots
| ![Login](./_screenShots/login.png) | ![Login Filled](./_screenShots/loginFilled.png) |
| ![Home](./_screenShots/homeScreen.png) | ![Favourite](./_screenShots/favouriteScreen.png) |
## Authors

- [@tatva-harpal](http://github.com/tatva-harpal/)

