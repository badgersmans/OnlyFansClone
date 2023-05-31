import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    postHeaderContainer: {
        // backgroundColor: 'salmon',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        
    },
    profileImage: {
        width: 80,
        aspectRatio: 1,
        borderRadius: '100%'
    },
    userContainer: {
        // backgroundColor: 'yellow',
        gap: 10,
        marginLeft: 10,
        // flex: 1,
    },
    nameText: {
        fontWeight: '600',
        fontSize: 20
    },
    handleText: {
        fontSize: 17,
        color: 'grey'
    },
    rightContainer: {
        // backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        // alignSelf: 'flex-end'
    },
    timestamp: {
        marginRight: 10
    }
});

export default styles;