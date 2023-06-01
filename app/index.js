import { Text } from "react-native";
import { FlashList } from "@shopify/flash-list";
import users from "../assets/data/users";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import styles from "../Index.Styles";
import UserCard from "../src/components/UserCard/UserCard";
import { Link } from "expo-router";
import { useAuthenticator } from '@aws-amplify/ui-react-native';

export default function Page() {
  const { signOut } = useAuthenticator()

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Link href={'/newPost'}>New Post</Link>
        <Text onPress={signOut}>Sign Out</Text>
        <FlashList 
          data={users}
          renderItem={({ item }) => <UserCard user={item} /> }
          key={users.id}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={20}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}