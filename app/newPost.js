import { View, Text, TextInput, StyleSheet, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { SimpleLineIcons, FontAwesome5, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'expo-image';
import { DataStore } from 'aws-amplify';
import { Post } from '../src/models'
import { useAuthenticator } from '@aws-amplify/ui-react-native'

const NewPost = () => {
  const router = useRouter();
  const [userInput, setUserInput] = useState('');
  const [image, setImage] = useState(null);
  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  const { user: { attributes } } = useAuthenticator();

  const onPost = async () => {
    // console.log(attributes.sub)
    // console.warn('post...')
    await DataStore.save(new Post({
      text: userInput,
      likes: 0,
      userID: attributes.sub
    }));

    setUserInput('')
  }

  const selectImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  const selectPoll = () => {
    console.log('poll')
  }

  const selectQuestion = () => {
    console.log('question')
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.navContainer}>
        <Pressable 
          style={({ pressed }) => [
              styles.backButtonContainer,
              { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={() => router.back()}
        >
          <Ionicons 
            name="ios-chevron-back" 
            style={styles.backButton}
          />
          <Text style={styles.backText}>Go Back</Text>
        </Pressable>
      </View>

      <TextInput 
        placeholder='Create new post'
        onChangeText={setUserInput}
        value={userInput}
        multiline={true}
        // numberOfLines={3}
      />

      <View style={styles.postButtons}>
        <SimpleLineIcons name="picture" size={24} color="grey" onPress={selectImage}/>
        <FontAwesome5 name="poll-h" size={24} color="grey" onPress={selectPoll}/>
        <MaterialCommunityIcons name="head-question-outline" size={24} color="grey" onPress={selectQuestion}/>
      </View>

      {image && (
        <Image 
          source={image}
          style={styles.image}
          contentFit="cover"
          placeholder={blurhash}
          transition={200}
        />
      )}

      <Button 
        title='Post'
        style={styles.postButton}
        onPress={onPost}
      />

      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  postButton: {
    // backgroundColor: 'red'
  },
  postButtons: {
    flexDirection: 'row',
    gap: 20,
    marginVertical: 15,
    alignItems: 'center',
    marginTop: 30
  },
  image: {
    width: '100%',
    aspectRatio: 4 / 3
  },
  navContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor: 'green',
    marginBottom: 20,
  },
  backButtonContainer: {
    // backgroundColor: '#4EADEA',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: '-5%' 
  },
  backButton: {
    // padding: 10,
    color: 'black',
    fontSize: 30,
    // backgroundColor: 'red',
  },
  backText: {
    fontSize: 18,
    color: '#3F85F7'
  },  
})

export default NewPost