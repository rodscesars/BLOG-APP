import React, { useContext, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPost } = useContext(Context);
  //está sendo utilizado o context importado e desestruturando o state e as actions
  useEffect(() => {
    getBlogPost(); //Chama a função pela primeira vez

    const listener = navigation.addListener("didFocus", () => {
      getBlogPost();
    }); //sempre que retornarmos para a index screen, chama de novo a função

    return () => {
      listener.remove();
    }; //vai retornar essa função que vai remover o listener; essa função é chamada
    //quando a index screen para de ser mostrada completamente em tela
  }, []); //é rodado somente uma vez (OBS: A cada vez que essa screen é renderizada)
  //Porém, quando mudamos de tela no stack, estamos apenas sobrepondo outra tela em cima,
  //ela continua rodando por baixo dos panos, por isso a ideia de criar um listener para
  //chamar novamente getBlogPost quando a indexscreen for o foco novamente

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.View}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    deleteBlogPost(item.id);
                  }}
                >
                  <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  View: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 30,
    color: "black",
  },
});

export default IndexScreen;
