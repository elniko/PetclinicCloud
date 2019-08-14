import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Owner } from '../model/Owner';
import { OwnersService } from './owners.service';

@Injectable({
              providedIn: 'root'
            })
export class OwnersResolver implements Resolve<Owner>{

  constructor(private ownersService: OwnersService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Owner> | Promise<Owner> | Owner {
    const id = route.paramMap.get("id");
    return this.ownersService
        .getOwnerById(+id);
  }

}
