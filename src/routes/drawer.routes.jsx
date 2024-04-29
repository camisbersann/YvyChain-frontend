import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import Login from "../screens/Login";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Category" component={Category} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;