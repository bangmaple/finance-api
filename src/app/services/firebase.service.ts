import { Injectable, OnModuleInit } from "@nestjs/common";
import { getFirebaseAdminInstance as getFirebaseServiceAccount } from "../utils";
import { FirebaseServiceAccount } from "../utils/type";
import * as firebaseAuth from 'firebase/auth';
import { initializeFirebaseApp } from "../utils/firebase-app.util";

@Injectable()
export class FirebaseService implements OnModuleInit {

    private firebaseServiceAccount: FirebaseServiceAccount;


    constructor() {
        
    }

    onModuleInit() {
        this.firebaseServiceAccount = getFirebaseServiceAccount();
    }

    async signInWithEmailAndPassword(email: string, password: string): Promise<any> {
        return await firebaseAuth
        .signInWithEmailAndPassword(firebaseAuth.getAuth(), email, password);
    }
}