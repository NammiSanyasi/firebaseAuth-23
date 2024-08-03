import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularfireauth:AngularFireAuth,private router:Router) { }

  async signup(email:string,password:string){
     try{
      const userCredential= await this.angularfireauth.createUserWithEmailAndPassword(
        email,
        password
      );
      return userCredential
     }
     catch(error:any){
      console.error('Sinup error:', error.message);
      throw new Error(error.message);
     }
  }
  async login(email:string,password:string){
    try{
      const userCredential=await this.angularfireauth.signInWithEmailAndPassword(
        email,
        password
      );
      return userCredential
    }
    catch(error:any){
      console.error('Login error:', error.message);
      throw new Error(error.message)
    }
  }
  async logout(){
    await this.angularfireauth.signOut();
    this.router.navigate(['/login']);
  }
}
