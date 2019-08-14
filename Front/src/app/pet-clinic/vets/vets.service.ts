import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Links } from '../links';
import { Vet } from '../model/Vet';

@Injectable({
  providedIn: 'root'
})
export class VetsService {

  constructor(private http: HttpClient) { }

  baseUrl = Links.backend + '/api/vets';

  addVet(vet: Vet): Observable<any> {
    if (vet.id === null) {
      return this.http.post(this.baseUrl, vet, {observe: 'response'})
    } else {
      return this.http.put(this.baseUrl, vet);
    }
  }

  getVets(): Observable<Vet[]> {
    return this.http.get<Vet[]>(this.baseUrl);
  }


  getVetById(id: number): Observable<Vet> {
    return this.http.get<Vet>(this.baseUrl+ '/' + id);
  }

  removeVetById(id: number): Observable<any> {
    return this.http.delete(this.baseUrl+'/' +id);
  }

}
