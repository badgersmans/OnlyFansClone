import { Stack } from "expo-router";
import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports'
Amplify.configure(awsExports);

export default function RootLayout() {
    return <Stack screenOptions={{ headerShown: false }}/>
};