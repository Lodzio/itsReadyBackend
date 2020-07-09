import * as firebase from 'firebase-admin';
import * as functions from 'firebase-functions';

export const finishOrderService = async (
  request: functions.https.Request,
  response: functions.Response,
) => {
  try {
    const orderId = request.params[0];
    const doc = await firebase
      .firestore()
      .collection('order')
      .doc(orderId)
      .get();
    const order: any = doc.data();
    await firebase
      .firestore()
      .collection('order')
      .doc(orderId)
      .update({status: 'done'});
    await firebase.messaging().sendToDevice(order.FCMToken, {
      data: {message: 'done'},
    });
    response.send('Hello from Firebase!');
  } catch (error) {
    response.status(500).send(error);
  }
};
