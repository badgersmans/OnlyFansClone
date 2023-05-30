import { View, Text } from 'react-native'
import React from 'react'
import { useRouter, useSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import users from '../../assets/data/users';

const ProfilePage = () => {

  const router = useRouter();
  const { id } = useSearchParams();

  const user = users.find(u => u.id === id)
  if(!user) <Text>User not found</Text>

  return (
    <SafeAreaView>
      <Text>Profile Page: {user.id}</Text>
      <Text>Name: {user.name}</Text>
      <Text onPress={() => router.back()}>Go back</Text>
    </SafeAreaView>
  )
}

export default ProfilePage