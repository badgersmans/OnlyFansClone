import { StyleSheet, Text, View, Image as RNImage, ImageBackground } from "react-native";
import { Image } from 'expo-image';
import users from "../assets/data/users";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Page() {
  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  const user = users[0]

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <ImageBackground 
          style={styles.userCard} 
          source={{ uri: user.coverImage }}
        >
          <View style={styles.imageOverlay} />
          {/* Image */}
          <Image 
            source={user.avatar}
            style={styles.image}
            contentFit="contain"
            placeholder={blurhash}
            transition={400}
          />

          {/* Name and Handle */}
          <View style={styles.nameHandleContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.handle}>@{user.handle}</Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, 
    // alignItems: "center",
    // justifyContent: 'center',
    // backgroundColor: 'red'
  },
  userCard: {
    // backgroundColor: 'lightgreen',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    // position: 'relative'
  },
  nameHandleContainer: {
    // backgroundColor: 'lightyellow',
    justifyContent: 'flex-end'
  },
  image: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 5,
    marginRight: 20
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color: 'white'
  },
  handle: {
    // fontWeight: 'bold',
    // fontSize: 16,
    color: 'white'
  },
  imageOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // position: 'absolute',
    ...StyleSheet.absoluteFill, // top bottom left right 0 position absolute
  },
});
