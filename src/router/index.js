import { createNativeStackNavigator } from '@react-navigation/native-stack'; 


import { Pagesatu, Pagedua, Login, Beranda, Pagedetail } from '../pages/index'; 
 
 
const Stack = createNativeStackNavigator(); 

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

           
          <Stack.Screen name="Pagesatu" component={Pagesatu}/> 
          <Stack.Screen name="Pagedua" component={Pagedua}/> 
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Pagedetail" component={Pagedetail}/> 
          <Stack.Screen name="Beranda" component={Beranda}/> 
        </Stack.Navigator>
    );
};


export default Router;