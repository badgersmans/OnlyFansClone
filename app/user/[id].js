import { Text } from 'react-native'
import React, { useState } from 'react'
import { useSearchParams } from 'expo-router'
import users from '../../assets/data/users';
import posts from '../../assets/data/posts';
import UserProfileHeader from '../../src/components/UserProfileHeader/UserProfileHeader';
import Post from '../../src/components/Post/Post';
import { FlashList } from "@shopify/flash-list";


const ProfilePage = () => {

  const { id } = useSearchParams();
  const [isSubscribed, setIsSubscribed] = useState(false)

  const user = users.find(u => u.id === id)
  if(!user) <Text>User not found</Text>

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