import { Text, View, TextInput, TouchableOpacity } from "react-native"

import { Participant } from "../../components/Participant"

import { styles } from "./styles"

export function Home() {

  function handleParticipantAdd() {
    console.log("Voce clicou no botao de adicionar")
  }

  function handleParticipantRemove() {
    console.log("Voce clicou no botao de remover")
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

      <Participant name="Felipe" onRemove={handleParticipantRemove}/>
      <Participant name="Mirian" onRemove={handleParticipantRemove}/>
    </View>
  )
}