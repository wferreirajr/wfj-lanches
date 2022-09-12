import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import fogo from '../../static/fogo.png';

export default function Produtos(props) {

    return <>
        <View style={estilos.cards}>
            <View style={estilos.cardProduto}>      
                <Text style={estilos.titulo}>{props.produto.nome}</Text>
                <View style={estilos.fotoLanche}>
                    <Image source={{ uri: props.produto.nomeimagem, }} style={estilos.imageLanche} />
                </View>
                <View style={estilos.fogoCalorias}>
                    <Image source={fogo} style={estilos.imagemFogo} />
                    <Text style={estilos.calorias}>{props.produto.calorias}</Text>
                </View>
                <Text style={estilos.valor}>{props.produto.valor}</Text>
            </View>
        </View>
    </>
}

const estilos = StyleSheet.create({
    cards: {
        padding: 5,
    },
    cardProduto: {
        borderRadius: 10,
        borderColor: "#A3A3A3",
        borderWidth: 1,
    },
    titulo: {
        fontSize: 25,
        fontWeight: "bold",
        lineHeight: 26,
        padding: 16,
    },
    calorias: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 30,
        paddingLeft: 10,

    },
    valor: {
        color: "orange",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 20,
        marginTop: 8,
        padding: 16,
    },
    imagemFogo: {
        width: 30,
        height: 30,
    },
    imageLanche: {
        width: 110,
        height: 110,
    },
    fogoCalorias: {
        flexDirection: "row",
        paddingLeft: 16,
    },
    fotoLanche: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 30,
    }
})