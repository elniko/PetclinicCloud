import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { Vet } from '../../model/Vet';
import { VetsService } from '../vets.service';

@Component({
  selector: 'app-list-vet',
  templateUrl: './list-vet.component.html',
  styleUrls: ['./list-vet.component.scss']
})
export class ListVetComponent implements OnInit {

  constructor(private vetsService: VetsService) { }
  vets: Vet[] = [];
  ngOnInit() {
    this.vetsService.getVets()
        .subscribe(data => {
          this.vets = data;
        });
  }


  remove(id: number) {
    this.vetsService.removeVetById(id)
        .pipe(mergeMap(resp=> this.vetsService.getVets()))
        .subscribe(data => {
          this.vets = data;
        })
  }

}
