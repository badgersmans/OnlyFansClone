import { View, Text } from 'react-native'
import React from 'react'
import { useSearchParams } from 'expo-router'
import users from '../../assets/data/users';
import UserProfileHeader from '../../src/components/UserProfileHeader/UserProfileHeader';


const ProfilePage = () => {

  const { id } = useSearchParams();

  const user = users.find(u => u.id === id)
  if(!user) <Text>User not found</Text>

  return (
    <View>
      <UserProfileHeader user={user}/>
    </View>
  )
}

export default ProfilePage