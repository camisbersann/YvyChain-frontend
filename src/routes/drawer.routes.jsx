import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Image } from "react-native";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import Contribuition from "../screens/Contribuition";
import CadastroEmpresa from "../screens/CadastroEmpresa";
import VerEmpresas from "../screens/VerEmpresas";
import DetalhesEmpresa from "../screens/DetalhesEmpresa";
import CadastroFornecedores from "../screens/CadastroFornecedores";
import VerFornecedores from "../screens/VerFornecedores";
import DetalhesFornecedor from "../screens/DetalhesFornecedor";
import CadastroSetores from "../screens/CadastroSetores";
import CadastroInsumos from "../screens/CadastroInsumos";
import CadastroProdutos from "../screens/CadastroProdutos";
import VerProdutos from "../screens/VerProdutos";
import StackRoutes from "./stack.routes";
import PaginaGerenciamento from "../screens/PaginaGerenciamento";
import LoginScreen from "../screens/LoginScreen";
import CustomDrawerContent from "../components/ImageDrawer";

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
      drawerActiveTintColor: "white",
      headerTintColor: "white",
      drawerLabelStyle: {
        color: "white",
      },
    }} >
      <Drawer.Screen name="Home" component={Home} 
       options={{
        title: "Home",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 75,
                height: 75,
                marginLeft: 260,
                marginBottom: 20,
                marginTop: 18,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#3B5B30",
        },
        drawerStyle: {
          backgroundColor: "#3B5B30",
          textColor: "#fff",
        },
      }}/>

      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Category" component={Category} />
      <Drawer.Screen name="Contribuition" component={Contribuition} 
       options={{
        title: "Contribuição",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 75,
                height: 75,
                marginLeft: 260,
                marginBottom: 20,
                marginTop: 18,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#3B5B30",
        },
        drawerStyle: {
          backgroundColor: "#3B5B30",
          textColor: "#fff",
        },
      }}/>

      <Drawer.Screen name="CadastroEmpresa" component={CadastroEmpresa} 
       options={{
        title: "Cadastro Empresa",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 75,
                height: 75,
                marginLeft: 260,
                marginBottom: 20,
                marginTop: 18,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#3B5B30",
        },
        drawerStyle: {
          backgroundColor: "#3B5B30",
          textColor: "#fff",
        },
      }}/>

      <Drawer.Screen name="VerEmpresas" component={VerEmpresas} 
       options={{
        title: "Ver Empresas",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 75,
                height: 75,
                marginLeft: 260,
                marginBottom: 20,
                marginTop: 18,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#3B5B30",
        },
        drawerStyle: {
          backgroundColor: "#3B5B30",
          textColor: "#fff",
        },
      }}/>

      <Drawer.Screen name="DetalhesEmpresa" component={DetalhesEmpresa} 
      options={{
        drawerItemStyle: { height: 0 },  // Esconde o item no menu
        unmountOnBlur: true,  // Desmonta a tela ao perder o foco
          title: "Detalhes Empresa",
          headerTitle: "",
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "right" }}>
              <Image
                source={require("../../assets/logo.png")}
                style={{
                  width: 75,
                  height: 75,
                  marginLeft: 260,
                  marginBottom: 20,
                  marginTop: 18,
                }}
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: "#3B5B30",
          },
          drawerStyle: {
            backgroundColor: "#3B5B30",
            textColor: "#fff",
          },
        }}
      />

      <Drawer.Screen name="CadastroFornecedores" component={CadastroFornecedores} 
       options={{
        title: "Cadastro Fornecedores",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 75,
                height: 75,
                marginLeft: 260,
                marginBottom: 20,
                marginTop: 18,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#3B5B30",
        },
        drawerStyle: {
          backgroundColor: "#3B5B30",
          textColor: "#fff",
        },
      }}/>

      <Drawer.Screen name="VerFornecedores" component={VerFornecedores} 
       options={{
        title: "Ver Fornecedores",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 75,
                height: 75,
                marginLeft: 260,
                marginBottom: 20,
                marginTop: 18,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#3B5B30",
        },
        drawerStyle: {
          backgroundColor: "#3B5B30",
          textColor: "#fff",
        },
      }}/>

      <Drawer.Screen name="DetalhesFornecedor" component={DetalhesFornecedor} 
      options={{
        drawerItemStyle: { height: 0 },  // Esconde o item no menu
        unmountOnBlur: true,  // Desmonta a tela ao perder o foco
          title: "Detalhes Fornecedor",
          headerTitle: "",
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "right" }}>
              <Image
                source={require("../../assets/logo.png")}
                style={{
                  width: 75,
                  height: 75,
                  marginLeft: 260,
                  marginBottom: 20,
                  marginTop: 18,
                }}
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: "#3B5B30",
          },
          drawerStyle: {
            backgroundColor: "#3B5B30",
            textColor: "#fff",
          },
        }}
      />

      <Drawer.Screen name="CadastroSetores" component={CadastroSetores}
       options={{
        title: "Cadastro Setores",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 75,
                height: 75,
                marginLeft: 260,
                marginBottom: 20,
                marginTop: 18,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#3B5B30",
        },
        drawerStyle: {
          backgroundColor: "#3B5B30",
          textColor: "#fff",
        },
      }} 
      />

      <Drawer.Screen name="CadastroInsumos" component={CadastroInsumos} 
       options={{
        title: "Cadastro Insumos",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 75,
                height: 75,
                marginLeft: 260,
                marginBottom: 20,
                marginTop: 18,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#3B5B30",
        },
        drawerStyle: {
          backgroundColor: "#3B5B30",
          textColor: "#fff",
        },
      }}
      />
      <Drawer.Screen name="CadastroProdutos" component={CadastroProdutos}
       options={{
        title: "Cadastro Produtos",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 75,
                height: 75,
                marginLeft: 260,
                marginBottom: 20,
                marginTop: 18,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#3B5B30",
        },
        drawerStyle: {
          backgroundColor: "#3B5B30",
          textColor: "#fff",
        },
      }} />
      <Drawer.Screen name="VerProdutos" component={VerProdutos} 
       options={{
        title: "Ver Produtos",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 75,
                height: 75,
                marginLeft: 260,
                marginBottom: 20,
                marginTop: 18,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#3B5B30",
        },
        drawerStyle: {
          backgroundColor: "#3B5B30",
          textColor: "#fff",
        },
      }}/>
      <Drawer.Screen name="StackRoutes" component={StackRoutes} options={{
        drawerItemStyle: { height: 0 },  // Esconde o item no menu
        unmountOnBlur: true, // Desmonta a tela ao perder o foco
          title: "StackRoutes",
          headerTitle: "",
          headerTitle: () => (
            <View style={{ flexDirection: "row", alignItems: "right" }}>
              <Image
                source={require("../../assets/logo.png")}
                style={{
                  width: 75,
                  height: 75,
                  marginLeft: 260,
                  marginBottom: 20,
                  marginTop: 18,
                }}
              />
            </View>
          ),
          headerStyle: {
            backgroundColor: "#3B5B30",
          },
          drawerStyle: {
            backgroundColor: "#3B5B30",
            textColor: "#fff",
          },
        }}
 />
      <Drawer.Screen name="PaginaGerenciamento" component={PaginaGerenciamento} 
       options={{
        title: "Gerenciamento",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 75,
                height: 75,
                marginLeft: 260,
                marginBottom: 20,
                marginTop: 18,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#3B5B30",
        },
        drawerStyle: {
          backgroundColor: "#3B5B30",
          textColor: "#fff",
        },
      }}
      />
      <Drawer.Screen name="LoginScreen" component={LoginScreen} 
       options={{
        title: "Login",
        headerTitle: "",
        headerTitle: () => (
          <View style={{ flexDirection: "row", alignItems: "right" }}>
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: 75,
                height: 75,
                marginLeft: 260,
                marginBottom: 20,
                marginTop: 18,
              }}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: "#3B5B30",
        },
        drawerStyle: {
          backgroundColor: "#3B5B30",
          textColor: "#fff",
        },
      }}/>
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;