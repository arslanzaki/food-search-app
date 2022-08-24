import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ResultCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2">
      <Image source={{ uri: imgUrl }} className="w-40 h-24 rounded-sm" />
      <View>
        <Text className="text-xs font-bold">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ResultCard;
