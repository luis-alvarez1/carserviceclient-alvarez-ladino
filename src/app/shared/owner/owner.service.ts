import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class OwnerService {
  public API = "//https://thawing-chamber-47973.herokuapp.com";
  public OWNER_API = this.API + "/owners";

  constructor(private http: HttpClient) {
    console.log("servicio listo");
  }
  getData(url: string) {
    return this.http.get(url).pipe(map((data) => data["_embedded"].owners));
  }

  save(owner: any): Observable<any> {
    let result: Observable<Object>;
    if (owner["href"]) {
      result = this.http.put(owner.href, owner);
    } else {
      result = this.http.post(this.OWNER_API, owner);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
