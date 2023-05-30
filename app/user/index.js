import { View, Text } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfilePage = () => {

  const router = useRouter();

  return (
    <SafeAreaView>
      <Text>ProfilePage</Text>
      <Text onPress={() => router.back()}>Go back</Text>
    </SafeAreaView>
  )
}

export default ProfilePage