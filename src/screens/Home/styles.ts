import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFCFE',
    padding: 24
  },
  eventName: {
    color: '#131016',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 56
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 48,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FDFCFE',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  button: {
    width: 48,
    height: 48,
    borderRadius: 5,
    backgroundColor: '#5A67D8',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  }
})