import { useState } from "react";
import { View, TextInput } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import tw from "twrnc";

export default function Note() {
  const [content, setContent] = useState<string>("");

  return (
    <View style={tw`flex gap-2`}>
      <BouncyCheckbox
        onPress={(isChecked: boolean) => {}}
        textComponent={
          <TextInput
            value={content}
            placeholder="O que você quer lembrar?"
            onChangeText={(text: string) => setContent(text)}
            style={tw`ml-3`}
          />
        }
      />
    </View>
  );
}
