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
    headerContainer: {
        marginHorizontal: 15,
        // backgroundColor: 'red',
    },
    imageContainer: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
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
    profileInfo: {
        marginTop: 15,
        // backgroundColor: 'red'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 5,
        marginTop: 15,
    },
    handle: {
        fontSize: 17,
        color: 'grey',
        marginBottom: 20,
    },
    bio: {
        lineHeight: 25,
        fontSize: 17,
        marginBottom: 50,
    },
    sub: {
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey'
    },
    subButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        // backgroundColor: 'red',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 50,
        marginTop: 30
    },
    buttonText: {
        color: '#4EADEA',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 16
        // border
    },


  });

export default styles;