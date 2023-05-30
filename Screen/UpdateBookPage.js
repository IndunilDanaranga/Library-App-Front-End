import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

const AdminDashboardScreen = () => {
  const [books, setBooks] = useState([
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
  ]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    description: '',
  });
  const [editingBookId, setEditingBookId] = useState(null);

  const handleAddBook = () => {
    if (newBook.title && newBook.author && newBook.description) {
      setBooks([
        ...books,
        {
          id: String(Date.now()),
          title: newBook.title,
          author: newBook.author,
          description: newBook.description,
        },
      ]);
      setNewBook({ title: '', author: '', description: '' });
    }
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
    if (editingBookId === id) {
      setEditingBookId(null);
    }
  };

  const handleEditBook = (id) => {
    const bookToEdit = books.find((book) => book.id === id);
    setNewBook({
      title: bookToEdit.title,
      author: bookToEdit.author,
      description: bookToEdit.description,
    });
    setEditingBookId(id);
  };

  const handleSaveBook = () => {
    if (newBook.title && newBook.author && newBook.description) {
      setBooks(
        books.map((book) =>
          book.id === editingBookId
            ? { ...book, ...newBook }
            : book
        )
      );
      setNewBook({ title: '', author: '', description: '' });
      setEditingBookId(null);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemAuthor}>{item.author}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <View style={styles.itemButtons}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleEditBook(item.id)}
        >
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteBook(item.id)}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={newBook.title}
        onChangeText={(text) =>
          setNewBook({ ...newBook, title: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        value={newBook.author}
        onChangeText={(text) =>
          setNewBook({ ...newBook, author: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={newBook.description}
        onChangeText={(text) =>
          setNewBook({ ...newBook, description: text })
        }
      />
      {editingBookId ? (
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSaveBook}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddBook}
        >
          <Text style={styles.addButtonText}>Add Book</Text>
        </TouchableOpacity>
      )}
      <FlatList
        style={styles.list}
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  addButton: {
    backgroundColor: '#4caf50',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#2196f3',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
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
  itemButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  editButton: {
    backgroundColor: '#2196f3',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AdminDashboardScreen;