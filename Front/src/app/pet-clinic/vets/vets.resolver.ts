import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Vet } from '../model/Vet';
import { VetsService } from './vets.service';

@Injectable({
              providedIn: 'root'
            })
export class VetsResolver implements Resolve<Vet>{

  constructor(private vetService: VetsService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Vet> | Promise<Vet> | Vet {
    const id = route.paramMap.get("id");
    return this.vetService
        .getVetById(+id);
  }

}
