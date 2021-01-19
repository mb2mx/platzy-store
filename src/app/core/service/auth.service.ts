import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,

  ) { }

   register(email: string, pwd: string ) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, pwd);
   }

   login(email: string, pwd: string ) {
    return this.angularFireAuth.signInWithEmailAndPassword(email,pwd);
   }

   logout(){
    return this.angularFireAuth.signOut();
   }

   hasSession(){
     return this.angularFireAuth.authState;
   }
}
