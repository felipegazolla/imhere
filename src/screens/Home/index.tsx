import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"

import { Participant } from "../../components/Participant"

import { styles } from "./styles"
import { useState } from "react"

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState("")

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante já existe", "Já existe um participante com este nome.")
    }

    if (participantName.length <= 0) {
      return Alert.alert("Digite o nome do participante")
    }

    setParticipants(prevState =>[...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover participante", `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
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
          onChangeText={e => setParticipantName(e)}
          value={participantName}
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
                onRemove={() => handleParticipantRemove(item)}
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