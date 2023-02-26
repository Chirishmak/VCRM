import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import firestore from '@react-native-firebase/firestore';

PushNotification.createChannel({
    channelId: "1",
    channelName: "Lead_Generating",
    channelDescription: "A channel to inform about leads",
    playSound: true,
    soundName: "default",
    vibrate: true,

},
    (created) => console.log(`createdChannel "${created}"`)
);

const NotificationController = () => {

    var CompanyData = []

    

    useEffect(() => {
        const unsubscribe = messaging().onMessage(async (remoteMessage) => {
            const documentID = firestore().
                collection("Companies").
                doc().
                get()
                console.log("DocumentID",documentID)
                .then(querySnapshot => {
                    console.log('Total Company: ', querySnapshot.size);

                    querySnapshot.forEach((doc) => CompanyData.push({ ...doc.data(), id: doc.id }))
                    console.log("CompanyData", CompanyData)
                    // console.log('User ID: ', doc.id, doc.data());
                    const filtering = CompanyData?.filter((user) => user.id === phoneNumber)
                    console.log("Filtering", filtering);
                    if (filtering[0]?.id === phoneNumber) {
                        // console.log("....")
                        PushNotification.localNotification({
                            message: remoteMessage.notification.body,
                            title: remoteMessage.notification.title,
                            channelId: true,
                            vibrate: true,
                        });
                    }
                })

                });
            return unsubscribe;
        }, []);
        return null;
    };

    export default NotificationController;