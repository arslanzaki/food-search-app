import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
// import openTable from "./../api/openTable";

const HomeScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const api = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${term}&app_id=960e8bb9&app_key=fd7a1eb6dff8cdb58eef4f79f1d83d97`
    );
    const data = await api.json();
    setResults(data.hits);
    console.log(data.hits)
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={searchApi}
      />
      <Text className="text-green-500 text-2xl font-bold text-center">
        HomeScreen
      </Text>
      <Text>{results.length}</Text>
      {results.map((r) => (
        <View key={r.recipe.uri}>
          <Image source={{uri: r.recipe.image}} className="w-20 h-20" />
        </View>
      ))}
    </View>
  );
};

export default HomeScreen;
