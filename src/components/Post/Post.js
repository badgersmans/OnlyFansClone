import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Image } from 'expo-image';
import { MaterialCommunityIcons, Ionicons, EvilIcons, MaterialIcons } from '@expo/vector-icons';
import { DataStore, Storage } from "aws-amplify";
import { User } from '../../models'


const Post = ({ post }) => {
    const [user, setUser] = useState(null);
    const [imageURI, setImageURI] = useState('');

    useEffect(() => {
        DataStore.query(User, post.userID).then(setUser)
    }, []);

    useEffect(() => {
        if(post.image) {
            Storage.get(post.image).then(setImageURI)
        }
    }, [post.image])

    const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <View style={{marginVertical: 20}}>
        <View style={styles.postHeaderContainer}>
            <Image 
                source={user?.avatar}
                style={styles.profileImage}
                contentFit="cover"
                placeholder={blurhash}
                transition={200}
            />

            <View style={styles.userContainer}>
                <Text style={styles.nameText}>{user?.name}</Text>
                <Text style={styles.handleText}>@{user?.handle}</Text>
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

        <Text style={styles.postDesc}>{post.text}</Text>

        {imageURI && (
        <Image 
            source={imageURI}
            style={styles.image}
            contentFit="cover"
            placeholder={blurhash}
            transition={200}
        />
        )}

        <View style={styles.buttonsContainer}>
            <View style={{flexDirection: 'row'}}>
                <Pressable 
                    style={({ pressed }) => [
                        styles.actionButton,
                        { opacity: pressed ? 0.5 : 1 },
                    ]}>

                    <Ionicons name="ios-heart" size={30} color="#4EADEA" />
                </Pressable>

                <Pressable 
                    style={({ pressed }) => [
                        styles.actionButton,
                        { opacity: pressed ? 0.5 : 1 },
                    ]}>

                    <EvilIcons name="comment" size={40} color="lightgrey" />
                </Pressable>

                <Pressable 
                    style={({ pressed }) => [
                        styles.actionButton,
                        { opacity: pressed ? 0.5 : 1 },
                    ]}>
                    <MaterialIcons name="attach-money" size={30} color="lightgrey" style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 20 }}/>
                </Pressable>

                {/* <Pressable 
                    style={({ pressed }) => [
                        styles.actionButton,
                        { opacity: pressed ? 0.5 : 1 },
                    ]}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <MaterialIcons name="attach-money" size={30} color="lightgrey" style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 20 }}/>
                            <Text style={{marginLeft: 10, textTransform: 'capitalize', fontWeight: '600'}}>send tip</Text>
                        </View>
                </Pressable> */}
            </View>

            <Text style={styles.likeText}>{post.likes > 1 ? `${post.likes} likes`: ` ${post.likes} like`}</Text>
        </View>
    </View>
  )
}

export default Post