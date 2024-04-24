import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import Contribuition from "../screens/Contribuition";
import Proposal from "../screens/proposal";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Contribuition" component={Contribuition} />
      <Stack.Screen name="Proposal" component={Proposal} />
    </Stack.Navigator>
  );
};

export default StackRoutes;