import React from "react";
import { Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text className="text-green-500 text-2xl font-bold text-center">
        HomeScreen
      </Text>
    </View>
  );
};

export default HomeScreen;
