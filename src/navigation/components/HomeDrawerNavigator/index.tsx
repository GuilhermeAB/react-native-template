// const CustomDrawerContent = (props: DrawerContentComponentProps): React.ReactElement => {
//   console.log(Object.keys(props));
//   // console.log(props.state);

//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <Drawer.Item
//           label='Home'
//           onPress={(): void => {
//             props.navigation.navigate('Home');
//           }}
//         />
//         <Drawer.Item
//           label='Settings'
//           onPress={(): void => {
//             props.navigation.navigate('Settings');
//           }}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const DrawerNavigator = createDrawerNavigator<HomeNavigatorParams>();

// <DrawerNavigator.Navigator initialRouteName={AppRoute.HOME} drawerContent={(props: DrawerContentComponentProps): React.ReactElement => CustomDrawerContent(props)}>
//   <DrawerNavigator.Screen
//     name={AppRoute.HOME}
//     component={Home}
//     options={{
//       title: 'Home',
//     }}
//   />
//   <DrawerNavigator.Screen
//     name={AppRoute.SETTINGS}
//     component={Settings}
//     options={{
//       title: 'Settings',
//     }}
//   />
// </DrawerNavigator.Navigator>;
