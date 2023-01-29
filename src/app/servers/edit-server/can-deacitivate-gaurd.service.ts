import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentDeactivate{
    canDeativate:()=>Observable<boolean> | Promise<boolean> |boolean;

}

export class CanDeactivateGaurd implements CanDeactivate<CanComponentDeactivate>{
    canDeactivate(component:CanComponentDeactivate,
                currentRoute:ActivatedRouteSnapshot,
                currentState:RouterStateSnapshot,
                nextState?:RouterStateSnapshot):Observable<boolean> | Promise<boolean>
                | boolean{
                    return component.canDeativate()
                }
}