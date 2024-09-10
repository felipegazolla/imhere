import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native"

import { Participant } from "../../components/Participant"

import { styles } from "./styles"

export function Home() {
  const participants = ['Felipe', 'Mirian', 'Simone', 'Mauricio', 'Jose', 'Natan', 'Manoela', 'Pedro', 'Asso', 'Guto']

  function handleParticipantAdd() {
    console.log("Voce clicou no botao de adicionar")
  }

  function handleParticipantRemove(name: string) {
    console.log(`Voce clicou em remover o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 9 de Setembro de 2024.
      </Text>

      <View
        style={styles.form}
      >
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#B0B3B5"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text
          style={styles.buttonText}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
        <FlatList
          data={participants}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Participant 
                key={item}
                name={item} 
                onRemove={() => handleParticipantRemove("Felipe")}
              />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Adicione participantes a sua lista!
            </Text>
          )}
        />
    </View>
  )
}