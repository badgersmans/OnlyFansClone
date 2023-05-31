import { Text, View, Image as RNImage, ImageBackground, Pressable } from "react-native";
import { Image } from 'expo-image';
import React from 'react'
import styles from './styles'
import { Link } from "expo-router";

const UserCard = ({user}) => {

  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <Link href={`/user/${user.id}`} asChild>
      <Pressable>
        <ImageBackground
          style={styles.userCard} 
          source={{ uri: user.coverImage }}
        >
          <View style={styles.imageOverlay} />

          {/* Image */}
          <Image 
            source={user.avatar}
            style={styles.image}
            contentFit="cover"
            placeholder={blurhash}
            transition={200}
          />

          {/* Name and Handle */}
          <View style={styles.nameHandleContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.handle}>@{user.handle}</Text>

          </View>
        </ImageBackground>
      </Pressable>
    </Link>
  )
}

export default UserCard