import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Links } from '../links';
import { Owner } from '../model/Owner';
import { Observable } from 'rxjs';

@Injectable({
              providedIn: 'root'
            })
export class OwnersService {

  constructor(private http: HttpClient) {
  }

  baseUrl = Links.backend + '/api/owners';

  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.baseUrl);
  }

  addOwner(owner: Owner) : Observable<any> {
    if (owner.id === null) {
      return this.http.post(this.baseUrl, owner, {observe: 'response'})
    } else {
      return this.http.put(this.baseUrl, owner);
    }
  }

  getOwnerById(id: number): Observable<Owner> {
    return this.http.get<Owner>(this.baseUrl+ '/' + id);
  }

  removeOwnerById(id: number): Observable<any> {
    return this.http.delete(this.baseUrl+'/' +id);
  }


}
