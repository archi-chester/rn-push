import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

export default function App() {

    const triggerNotificationHandler = () => {
        Notifications.scheduleNotificationAsync({
            content: {
                title: 'My first local notification!',
                body: 'My first local notification! - text'
            },
            trigger: {
                seconds: 10
            }
        });
    };

    return (
        <View style={styles.container}>
            <Button
                title="Trigger Notification"
                onPress={triggerNotificationHandler}
            />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
