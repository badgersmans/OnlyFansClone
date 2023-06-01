import { Text, Pressable, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'expo-router'
import posts from '../../assets/data/posts';
import UserProfileHeader from '../../src/components/UserProfileHeader/UserProfileHeader';
import Post from '../../src/components/Post/Post';
import { FlashList } from "@shopify/flash-list";
import { Ionicons } from '@expo/vector-icons';
import { DataStore } from "aws-amplify";
import { User } from '../../src/models'

const ProfilePage = () => {

  const [user, setUser] = useState(null);

  const { id } = useSearchParams();
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    DataStore.query(User, id).then(setUser);
  }, [id])

  // const user = users.find(u => u.id === id)
  if(!user) return <Text>User not found</Text>

  if(!isSubscribed) {
    return (
      <View>
        <UserProfileHeader 
          user={user} 
          isSubscribed={isSubscribed} 
          setIsSubscribed={setIsSubscribed}
        />

      <View style={{
        backgroundColor: 'lightgrey',
        padding: 10,
        height: '31%',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Ionicons name="ios-lock-closed" size={80} color="grey" style={{ marginBottom: 20 }}/>
        <Pressable 
          style={({ pressed }) => [
              {
                backgroundColor: '#4EADEA',
                padding: 20,
                borderRadius: 40,
              },
              // { opacity: pressed ? 0.5 : 1 },
          ]}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 19}}>Subscribe to see user's posts</Text>
        </Pressable>
      </View>
      </View>
    )
  }

  return (
      <FlashList 
        data={posts}
        renderItem={({ item }) => <Post post={item}/> }
        key={posts.id}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={10}
        ListHeaderComponent={() => (
          <UserProfileHeader 
            user={user} 
            isSubscribed={isSubscribed} 
            setIsSubscribed={setIsSubscribed}
          />
        )}
      />
  )
}

export default ProfilePage