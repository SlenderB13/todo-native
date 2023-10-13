import { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TextInput } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FAB } from "react-native-paper";
import uuid from "react-native-uuid";
import tw from "twrnc";
import Note from "../../components/note";

interface Note {
  id: string | number[];
  text: string;
  isDone: boolean;
}

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  function handleAddNote() {
    setNotes([...notes, { id: uuid.v4(), text: "", isDone: false }]);
  }

  useEffect(() => {}, [notes]);

  return (
    <SafeAreaView style={tw`h-full`}>
      <View style={tw`py-8 px-6`}>
        <Text style={tw`text-2xl mt-4 font-semibold`}>Suas notas</Text>
      </View>
      <View style={tw`py-8 px-6 flex flex-col gap-8`}>
        {notes ? (
          notes.map((note, index) => <Note key={index} />)
        ) : (
          <Text>Sem notas</Text>
        )}
      </View>
      <FAB
        style={tw`w-14 h-14 bg-orange-400 absolute bottom-4 right-4`}
        icon="plus"
        color="white"
        onPress={() => handleAddNote()}
      />
    </SafeAreaView>
  );
}
