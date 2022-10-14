import { FirebaseServiceAccount } from "./type";
import * as admin from 'firebase-admin';

const firebaseServiceAccountJSON = require('../../../assets/finance-55737-firebase-adminsdk-u2nrm-6698909f47.json');

export const getFirebaseAdminInstance = () => {
    if (!firebaseServiceAccountJSON) {
        throw new Error("No Firebase Admin SDK JSON found!");
    }
    return firebaseServiceAccountJSON as FirebaseServiceAccount;
};

export const initializeFirebaseAdminApp = () => {
    const serviceAccount = getFirebaseAdminInstance();

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: serviceAccount.project_id,
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key.replace(/\\n/g, '\n'),
      } as Partial<admin.ServiceAccount>)
    });
    return serviceAccount.project_id;
  };

  export default admin;