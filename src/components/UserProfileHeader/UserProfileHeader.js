import { View, Text, ImageBackground, Platform, Pressable } from 'react-native'
import { Image } from 'expo-image';
import React from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

const iosIcon = <Ionicons name="ios-share-outline" style={styles.icon} />
const androidIcon = <SimpleLineIcons name="share-alt" style={styles.icon} />

const UserProfileHeader = ({ user, isSubscribed, setIsSubscribed}) => {
    const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const router = useRouter();


  return (
    <>
    <ImageBackground
        style={styles.userCard} 
        source={{ uri: user.coverImage }}
        resizeMode='cover'
      >
        <View style={styles.imageOverlay}/>

        <SafeAreaView style={styles.safeAreaView}>
          <Ionicons 
            name="ios-chevron-back" 
            style={styles.backButton}
            onPress={() => router.back()}
          />

            <View style={styles.pageHeader}>
              <Text style={styles.accountName}>{user.name}</Text>

              <View style={styles.statsContainer}>
                <Text style={styles.stats}>1.4K Posts</Text>
                <Text style={styles.dots}>•</Text>
                <Text style={styles.stats}>300.4K Views</Text>
                <Text style={styles.dots}>•</Text>
                <Text style={styles.stats}>1.3M Fans</Text>
              </View>
            </View>
        </SafeAreaView>
      </ImageBackground>

      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
          <Image 
            source={user.avatar}
            style={styles.image}
            contentFit="cover"
            placeholder={blurhash}
            transition={200}
          />
          
            <Pressable style={({ pressed }) => [
              {},
              { opacity: pressed ? 0.5 : 1 },
            ]}>
              {Platform.OS === 'ios' ? iosIcon : androidIcon}
            </Pressable>
          
        </View>

        
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.handle}>@{user.handle}</Text>
        <Text style={styles.bio} numberOfLines={3}>{user.bio}</Text>
        <Text style={styles.sub}>SUBSCRIPTION</Text>
        
        <Pressable 
          style={({ pressed }) => [
            styles.subButtons,
            { backgroundColor: isSubscribed ? 'white' : '#4EADEA' },
            { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={() => setIsSubscribed(!isSubscribed)}
        >
          <Text 
            style={[styles.buttonText, { color: isSubscribed ? '#4EADEA' : 'white' }]}
          >
            { isSubscribed ? `subscribed` : `subscribe` }
          </Text>

          <Text 
            style={[styles.buttonText, { color: isSubscribed ? '#4EADEA' : 'white' }]}
          >
            {user.subscriptionPrice === 0 ? `for free` : `RM ${user.subscriptionPrice?.toFixed(2)} / month`}
          </Text>
        </Pressable>

      </View>
    </>
  )
}

export default UserProfileHeader