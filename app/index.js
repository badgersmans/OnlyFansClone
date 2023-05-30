import users from "../assets/data/users";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import styles from "../Index.Styles";
import UserCard from "../src/components/UserCard/UserCard";

export default function Page() {
  // const user = users[0]

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <UserCard user={users[0]}/>
        <UserCard user={users[1]}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}