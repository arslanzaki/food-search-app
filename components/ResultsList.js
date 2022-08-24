import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import ResultCard from "./ResultCard";

const ResultsList = ({ results, heading }) => {
  return (
    <>
      <Text className="text-2xl font-bold mt-8">{heading}</Text>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {results.map((r) => (
          <ResultCard
            key={r.recipe.uri}
            imgUrl={r.recipe.image}
            title={r.recipe.label}
          />
        ))}
      </ScrollView>
      {/* <FlatList
        horizontal
        date={results}
        keyExtractor={(result) => result.recipe.uri}
        renderItem={(item) => {
          return (
            <ResultCard
              imgUrl={item.recipe.image}
              title={item.recipe.label}
            />
          );
        }}
      /> */}
    </>
  );
};

export default ResultsList;
