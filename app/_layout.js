import { Stack } from "expo-router";
import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports'
import { Authenticator } from '@aws-amplify/ui-react-native';
Amplify.configure(awsExports);

export default function RootLayout() {
    return (
        <Authenticator.Provider>
            <Authenticator>
                <Stack screenOptions={{ headerShown: false }}/>
            </Authenticator>
        </Authenticator.Provider>
    )
};