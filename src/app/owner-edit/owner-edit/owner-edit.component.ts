import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OwnerService } from '../../shared/owner/owner.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-owner-edit',
  templateUrl: './owner-edit.component.html',
  styleUrls: ['./owner-edit.component.css'],
})
export class OwnerEditComponent implements OnInit {
  owner: any = {};
  owners: any[] = [];
  sub: Subscription;
  constructor(private ownerService: OwnerService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      const id = params["id"];
      if (id) {
        this.ownerService.get(id).subscribe((owner: any) => {
          if (owner) {
            this.owner = owner;
            this.owner.href = owner._links.self.href;
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/owner-list']);
  }

  save(form: NgForm) {
    this.ownerService.save(form).subscribe(
      (result) => {
        this.gotoList();
      },
      (error) => console.error(error)
    );
  }

  remove(href) {
    this.ownerService.remove(href).subscribe(
      (result) => {
        this.gotoList();
      },
      (error) => console.error(error)
    );
  }
}
