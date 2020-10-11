import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { OwnerService } from "../../shared/owner/owner.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-owner-edit",
  templateUrl: "./owner-edit.component.html",
  styleUrls: ["./owner-edit.component.css"],
})
export class OwnerEditComponent implements OnInit {
  constructor(private ownerService: OwnerService, private router: Router) {}

  ngOnInit() {}

  gotoList() {
    this.router.navigate(["/owner-list"]);
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
