import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    userCard: {
    //   backgroundColor: 'lightgreen',
      padding: 10,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 20,
      // position: 'relative'
    },
    nameHandleContainer: {
    //   backgroundColor: 'lightyellow',
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

export default styles;