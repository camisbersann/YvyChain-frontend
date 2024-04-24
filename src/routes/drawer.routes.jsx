import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import Contribuition from "../screens/Contribuition";
import AboutUs from "../screens/AboutUs";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Category" component={Category} />
      <Drawer.Screen name="Contribuition" component={Contribuition} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;