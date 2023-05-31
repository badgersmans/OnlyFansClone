import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    userCard: {
    //   padding: 10,
    height: 200,
    width: '100%',
    //   borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    },
    imageOverlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        ...StyleSheet.absoluteFill,
    },
    backButton: {
        color: 'white',
        fontSize: 30,
        marginRight: 10,
        // backgroundColor: 'red',
        padding: 10
    },
    safeAreaView: { 
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    pageHeader: {
        // backgroundColor: 'green',
    },
    statsContainer : {
        flexDirection: 'row',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    accountName: {
        color: 'white',
        fontWeight: '500',
        fontSize: 30
    },
    stats: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500'
    },
    dots: {
        color: 'white',
        // fontWeight: 'bold',
        // fontSize: 20,
        marginHorizontal: 10,
    },
    imageContainer: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginHorizontal: 15,
        marginTop: -50
    },
    image: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 5,
        marginRight: 20
    },
    icon: {
        color: '#4EADEA',
        fontSize: 25,
        borderWidth: 1,
        // alignSelf: 'flex-end',
        borderColor: '#63B7EC',
        borderRadius: 20,
        padding: 8
    },
  });

export default styles;