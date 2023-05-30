import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';

const BookListScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  const books = [
    { id: 1, title: 'මේඝ ධාරා', author: 'තිලංකා සේනානායක', description: 'මෙය රෝමාන්තික ශානරයේ නව කතාවකි.' },
    { id: 2, title: 'දෙව් නුවර', author: 'අභිශේක් රන්දෙනිය', description: 'මෙය ඓතිහාසික ප්‍රබන්ධ ශානරයේ නව කතාවකි.' },
    { id: 3, title: 'අම්මා', author: 'උපුල් ශාන්ත සන්නස්ගල', description: 'මෙය සමාජ විවරණයක් සහිත විවිධ ශානරයන් ඔස්සේ විහිදී යන නවකතාවකි.' },
    { id: 4, title: 'D', author: 'මංජුල සේනාරත්න', description: 'මෙය ඩයනා කුමරියගේ ජීවිතය අලලා ලියන ලද ප්‍රබන්ධ නව කතාවකි.' },
    { id: 5, title: 'නිල් කටරොලු', author: 'මොහාන් රාජ් මඩවල', description: 'මෙය ශෘංගාරාත්මක ශානරයේ නව කතාවකි.වඩාත් සුදුසු වන්නේ අවුරුදු 16ට වැඩි පාඨකයන් සදහාය.' },
    { id: 6, title: 'ඇබිනුක්ටා', author: 'පොසිකා රණසිංහ', description: 'මෙය අද්භූත ශානරයේ නව කතාවකි.' },
    { id: 7, title: 'ගිරිකඩ', author: 'රොශාන් රත්නපුලි', description: 'මෙය LTTE යුද්දය අලලා ලියවුනු ලද නවකතාවකි.' },
    { id: 8, title: 'Amazoniya', author: 'James Rollings', description: 'මෙය මංජුල දිසානායක මහතා විසින් සිංහලයට පරිවර්තනය කරන ලද නවකතාවකි. මෙය ඇමසෝනියා වනාන්තරය ආශ්‍රයෙන් ලියවී ඇති ගවේශනාත්මක ගනයේ නවකතාවකි.' },
    { id: 9, title: 'Exacavation', author: 'James Rollings', description: 'මෙය මංජුල දිසානායක මහතා විසින් සිංහලයට පරිවර්තනය කරන ලද නවකතාවකි. මෙය ඇස්ටෙක් ශිෂ්ටාචාරය ආශ්‍රයෙන් ලියවී ඇති ගවේශනාත්මක ගනයේ නවකතාවකි.' },
    { id: 10, title: 'Sandistrom ', author: 'James Rollings', description: 'මෙය නෞමි කත්‍යානා මෙනවිය විසින් සිංහලයට පරිවර්තනය කරන ලද නවකතාවකි. මෙය ගවේශනාත්මක ගනයේ නවකතාවකි.' },
  ];

  const handleBorrow = (book) => {
    navigation.navigate('Home');
    Alert.alert(`You have successfully borrowed "${book.title}"!`);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(text.toLowerCase()) ||
        book.author.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemAuthor}>{item.author}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <TouchableOpacity style={styles.borrowButton} onPress={() => handleBorrow(item)}>
        <Text style={styles.borrowButtonText}>Borrow</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search by title or author"
        onChangeText={handleSearch}
        value={searchQuery}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        inputStyle={styles.searchBarInput}
      />
      <Text style={styles.title}>Book List</Text>
      <FlatList
        style={styles.list}
        data={searchQuery ? filteredBooks : books}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  searchBarContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderTopWidth: 0,
  },
  searchBarInputContainer: {
    backgroundColor: '#f2f2f2',
  },
  searchBarInput: {
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    width: '100%',
  },
  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemAuthor: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  itemDescription: {
    marginBottom: 10,
  },
  borrowButton: {
    backgroundColor: '#2196f3',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  borrowButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BookListScreen;
