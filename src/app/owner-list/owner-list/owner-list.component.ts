import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../../shared/owner/owner.service';


@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: any[] = [];


  constructor( private ownersService: OwnerService) { }

  ngOnInit() {
    this.ownersService.getData()
    .subscribe(data => {
      console.log(data._embedded);
      this.owners = data._embedded.owners.map(owner =>{
        return {
          ...owner,
          ownerId: owner._links.self.href.split('/')[owner._links.self.href.split('/').length - 1]
        }
      })
      this.owners = this.owners.filter(owner => owner.name !== null);
    });

  }


}
