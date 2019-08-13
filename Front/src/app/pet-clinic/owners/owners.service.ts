import { Injectable } from '@angular/core';
import { Error } from 'tslint/lib/error';
import { Owner } from '../model/Owner';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  constructor() { }

   testOwners: Owner[] = [{
     id:1,
     firstName:'Bob',
     lastName: 'Jackson',
     telephone: '77777',
     birthDate: new Date(),
     homePage: '',
     address: 'street 22',
     email: 'mail@mail.com',
     city: 'London'
   }];


  getOwners() {
    return this.testOwners;
  }

  addOwner(owner: Owner) {
    if(owner.id === null) {
      this.testOwners.push(owner);
    } else {
      let oldOwner = this.getOwnerById(owner.id);
      if(!oldOwner) throw new Error();
      Object.assign(oldOwner, owner);
    }
  }

  getOwnerById(id: number): Owner {
    return this.testOwners.find(owner=> owner.id === id);
  }

  removeOwnerById(id: number) {
    const index = this.testOwners.findIndex(owner=> owner.id === id);
    this.testOwners.splice(index, 1);
  }


}
