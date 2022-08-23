import React, { useState } from "react";
import { Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  const [term, setTerm] = useState("");
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log("Term Submitted")}
      />
      <Text className="text-green-500 text-2xl font-bold text-center">
        HomeScreen
      </Text>
      <Text>{term}</Text>
    </View>
  );
};

export default HomeScreen;
