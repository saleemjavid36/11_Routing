export class AuthService {
  loggedIn: false | any;
  
  
  isAuthenticated(){
    return new Promise ((resolve,reject)=>{
      setTimeout(()=>{
        resolve(this.loggedIn)
      },800)
    })
  }
  
  login(){
    this.loggedIn=true
  }
  logout(){
    this.loggedIn=false
  }
}

// isAuthenticated(){
  //   const promise = new Promise{
    //     (resolve,reject)=>{
      //       setTimeout(()=>{
        //         resolve(this.loggedIn)
        //       },800)
//     }
//   }
// }
        // import { Injectable } from '@angular/core';
        
        // @Injectable({
        //   providedIn: 'root'
        // })