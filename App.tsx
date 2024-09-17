import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  ListRenderItem,
  Dimensions,
} from 'react-native';

// Definindo o tipo de dado dos jogos
interface Jogo {
  id: string;
  nome: string;
  image: string;
}

// Dados estáticos de exemplo
const jogosData: Jogo[] = [
  { id: '1', nome: 'Roubão de carro 8', image: 'https://i.scdn.co/image/ab67616d00001e022334b4d3199bea648237751e' },
  { id: '2', nome: 'Bom de Guerra: Hilux', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUVC0ivnkGUlSFDqtFGKQUfPe-jy8Z-u81Q&s' },
  { id: '3', nome: 'Cyberpunk 1944: Austria Edition', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgp5zH6hJDGEWoLKNSwoC8D7hWK3FoJ_BPQ&s' },
  { id: '4', nome: 'Preciso de Corrida: Subterrâneo', image: 'https://images3.memedroid.com/images/UPLOADED312/58408bbc4ad29.jpeg' },
  { id: '5', nome: 'Ligação do Duty: Operação do Negão', image: 'https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2024/07/31/849877176-wesley-snipes-blade.jpg' },
  { id: '5', nome: 'Redenção da Morte Vermelha: 4', image: 'https://s.yimg.com/ny/api/res/1.2/mGhfD9EQe9ZJzjdAgQjvhQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQxMQ--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-04/20d1cd60-7970-11ea-b476-8b9d6ba3edc5' },
];

export default function App() {
  const [search, setSearch] = useState<string>(''); 
  const [filteredJogos, setFilteredJogos] = useState<Jogo[]>(jogosData); 

  const handleSearch = (text: string) => {
    setSearch(text);
    setFilteredJogos(
      jogosData.filter((jogo) =>
        jogo.nome.toLowerCase().includes(text.toLowerCase() || '')
      )
    );
  };

  const renderItem: ListRenderItem<Jogo> = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.gameName}>{item.nome}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header com o nome do app e input para pesquisa */}
      <View style={styles.header}>
        <Text></Text>
        <Text></Text>
        <Image source={{ uri: "https://tm.ibxk.com.br/2024/03/05/05191637650346.jpg?ims=1200x675", }} style={styles.cardLogo} />
        <Text style={styles.title}>Green Steam</Text>
        <TextInput
          style={styles.input}
          placeholder="Buscar jogos..."
          value={search}
          onChangeText={handleSearch}
        />
      </View>

      {/* Listagem de Jogos */}
      <FlatList
        data={filteredJogos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2} // Define 2 colunas
        columnWrapperStyle={styles.columnWrapper} // Estilo para as colunas
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Bergel and Co.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    padding: 20,
    backgroundColor: '#00FF00',
  },
  title: {
    fontSize: 40,
    color: '#DCDCDC',
    textAlign: 'center',
    textShadowColor: '#000000', // Cor da borda
    textShadowOffset: { width: 3, height: 3 }, // Espessura da borda
    textShadowRadius: 5, // Desfoque da borda
  },
  input: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  card: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
  },
  cardLogo: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
  },
  gameName: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  footer: {
    padding: 20,
    backgroundColor: '#00FF00',
  },
  footerText: {
    color: '#000000',
    textAlign: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});