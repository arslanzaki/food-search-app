import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ResultCard = ({ imgUrl, title, calories }) => {
  return (
    <TouchableOpacity className="mr-2">
      <Image source={{ uri: imgUrl }} className="w-40 h-24 rounded-sm" />
      <View className="w-40">
        <Text className="text-sm font-bold">{title}</Text>
        <Text className="text-[12px] text-gray-600">{Math.round(calories)} cal</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ResultCard;
