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
    this.ownersService.getData('https://thawing-chamber-47973.herokuapp.com/owners')
    .subscribe((res:any) => {
      console.log(res);
      this.owners = res;
      console.log(this.owners);
    });
  }

  

}
