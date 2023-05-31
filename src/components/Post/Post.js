import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import { Image } from 'expo-image';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Post = ({post}) => {
    const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <View style={{marginVertical: 20}}>
        <View style={styles.postHeaderContainer}>
            <Image 
                source={post.User.avatar}
                style={styles.profileImage}
                contentFit="cover"
                placeholder={blurhash}
                transition={200}
            />

            <View style={styles.userContainer}>
                <Text style={styles.nameText}>{post.User.name}</Text>
                <Text style={styles.handleText}>@{post.User.handle}</Text>
            </View>

            <View style={styles.rightContainer}>
                <Text style={styles.timestamp}>4 hours ago</Text>

                <Pressable 
                    style={({ pressed }) => [
                        {},
                        { opacity: pressed ? 0.5 : 1 },
                    ]}>
                    <MaterialCommunityIcons name="dots-horizontal" size={25} color="grey" />
                </Pressable>
            </View>

        </View>

        <Image 
            source={post.image}
            style={styles.image}
            contentFit="cover"
            placeholder={blurhash}
            transition={200}
        />
    </View>
  )
}

export default Post