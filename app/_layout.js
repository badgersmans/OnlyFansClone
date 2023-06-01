import { Stack } from "expo-router";
import { API, Amplify, DataStore, Hub } from 'aws-amplify';
import awsExports from '../src/aws-exports'
import { Authenticator } from '@aws-amplify/ui-react-native';
import { useEffect } from "react";
import { User } from "../src/models";
Amplify.configure(awsExports);

const CreateUserMutation = `
mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
    id 
    name 
    handle 
    bio
    subscriptionPrice
    }
  }
`;

export default function RootLayout() {
    useEffect(() => {
        const removeListener = Hub.listen('auth', async (data) => {
            console.log(JSON.stringify(data, null, 2))

            if(data.payload.event === 'signIn') {
                const {sub, name, nickname} = data.payload.data.attributes;

                const newUser = {
                    "id" : sub,
                    "name" : name,
                    "handle" : nickname,
                    "subscriptionPrice": 0,
                }
                await API.graphql({
                    query: CreateUserMutation, 
                    variables: {input: newUser},
                });
                console.log('user saved in db...')
                // DataStore.save(new User({
                //     id: sub,
                //     name,
                //     email_verified,
                //     nickname,
                //     email,
                // }));

            }
        });

        return () => {
            removeListener();
        }
    }, [])

    return (
        <Authenticator.Provider>
            <Authenticator>
                <Stack screenOptions={{ headerShown: false }}/>
            </Authenticator>
        </Authenticator.Provider>
    )
};