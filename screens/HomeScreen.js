import React, { useState, useEffect } from "react";
import { Image, Text, View } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
// import openTable from "./../api/openTable";
import useResults from "../hooks/useResults";

const HomeScreen = () => {
  const [term, setTerm] = useState("");

  const [searchApi, results] = useResults();

  const filterByCalories = (minCal, maxCal) => {
    return results.filter((result) => {
      return (
        result.recipe.calories >= minCal && result.recipe.calories <= maxCal
      );
    });
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
      <ResultsList
        results={filterByCalories(500, 1000)}
        heading="Calories [500-1000]"
      />
      <ResultsList
        results={filterByCalories(1000, 2000)}
        heading="Calories [1000-2000]"
      />
      <ResultsList
        results={filterByCalories(2000, 3000)}
        heading="Calories [2000-3000]"
      />
    </View>
  );
};

export default HomeScreen;
