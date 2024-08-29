import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { createClient } from 'contentful';

const Contentful = createClient({
  space: 'f0ke2at73bdn',
  accessToken: 'QOqCqOf3sJfUBUuePTBPtoJyBi9PkJ74ztKw63xFav4',
});

const ContentfulDataScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Contentful.getEntries({ content_type: 'blogPost' });
        setData(response.items);
      } catch (error) {
        console.error('Error fetching data from Contentful:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.postContainer}>
        <Image style={styles.featuredImage} source= {{uri: `https:${ item.fields.featuredImage.fields.file.url }`}}/>
        <Text style={styles.title}>{item.fields.title}</Text>
        <Text style={styles.body}>{item.fields.body}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.sys.id}
        contentContainerStyle={{ paddingVertical: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    
  },
  postContainer: {
    alignItems: 'center', 
    marginBottom: 20,
  },
  itemContainer: {
    marginBottom: 20,
    paddingHorizontal: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  body: {
    fontSize: 16,
    marginBottom: 10,
  },
  featuredImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});

export default ContentfulDataScreen;






