import React from 'react';
import { SafeAreaView, StatusBar,ScrollView } from 'react-native';
import Produtos from "./src/telas/Produtos";

const beefBurger = {
  nome: "Beef Burger",
  calorias: "70 Calories",
  valor: "$12.00",
  nomeimagem: "https://freepikpsd.com/file/2019/10/burger-desenho-png-5-Transparent-Images.png",
}

const pancakes = {
  nome: "Pancakes",
  calorias: "60 Calories",
  valor: "$15.00",
  nomeimagem: "https://i.pinimg.com/originals/b2/3c/2a/b23c2ae3e421dc7a5eb07882bb1b45f3.png",
}

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Produtos produto={beefBurger} />
        <Produtos produto={pancakes} />
      </ScrollView>
    </SafeAreaView>
  );
}

