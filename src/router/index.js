import { createNativeStackNavigator } from '@react-navigation/native-stack'; 


import { Pagesatu, Pagedua, Login, Beranda, Pagedetail, Pagedetail2, Signup,
  Pagedetail3, Pagedetail4
 } from '../pages/index'; 
 
 
const Stack = createNativeStackNavigator(); 

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Screen name="Beranda" component={Beranda}/> 
          
          <Stack.Screen name="Pagesatu" component={Pagesatu}/> 
          <Stack.Screen name="Pagedua" component={Pagedua}/> 
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Signup" component={Signup}/>
          <Stack.Screen name="Pagedetail" component={Pagedetail}/> 
          <Stack.Screen name="Pagedetail2" component={Pagedetail2}/> 
          <Stack.Screen name="Pagedetail3" component={Pagedetail3}/> 
          <Stack.Screen name="Pagedetail4" component={Pagedetail4}/> 
          
        </Stack.Navigator>
    );
};


export default Router;