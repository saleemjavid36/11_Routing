import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router, CanActivateChild, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate,CanActivateChild{

  constructor(private autService:AuthService,private router:Router) { }


 


  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot)
    :Observable <boolean> | Promise <boolean> | boolean{
    return this.autService.isAuthenticated()
    .then(
      (authenticated:any)=>{
        if(authenticated){
          return true
        }else{
          this.router.navigate(['/']);
          return false
        }
      }
    )
  }

  canActivateChild(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise <boolean> | boolean {
    return this.canActivate(route,state)
  }


}

// return this.autService.isAuthenticated()
//     .then(
//       (authenticated:boolean)=>{
//         if(authenticated){
//           return true
//         }else{
//             this.router.navigate(['/']);
//         }
//       }
//     )
