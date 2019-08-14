import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Links } from '../links';
import { Pet } from '../model/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private http: HttpClient) { }

  baseUrl = Links.backend + '/api/pets';

  addPet(pet: Pet) {
    this.http.put(this.baseUrl, pet);
  }


}
