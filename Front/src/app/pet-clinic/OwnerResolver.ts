import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Owner } from './model/Owner';
import { OwnersService } from './owners/owners.service';

@Injectable({
              providedIn: 'root'
            })
export class OwnerResolver implements Resolve<Owner>{

  constructor(private ownersService: OwnersService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Owner> | Promise<Owner> | Owner {
    const id = route.paramMap.get("id");
    let owner: Owner = this.ownersService.getOwnerById(+id);
    console.log(owner);
    return of(owner);
  }

}
