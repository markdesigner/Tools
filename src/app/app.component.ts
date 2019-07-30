import { Apiresult } from './apiresult';
import { HttpModule, Http, Headers } from '@angular/http';
import { HttpService } from './model/http.service';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpService, private HTTP: Http) { }
  title = 'MarkPanel';
  result: {};
  testobj={
    "The MRT Stations in New Taipei City": "淡水站",
    name:22
  };

  ngOnInit(): void {
 
    // this.http.authGet("http://localhost:3000/result")
    //   .then(res => {
    //   this.result = res
    //     console.log(this.result)
    //   })

    this.getinfo().then(res=>{this.result=res},rej=>{this.result=rej})
  }
  getinfo() {
    let hh=new Headers();
    // hh.set("Content-Type", "application/json");
    return this.HTTP
      .get("http://localhost:3000/result").toPromise()
      .then(respons => {
        let result = respons;
        console.log(result)
        return result;
      }, reject => {
        return (reject)
      })
      .catch(

      )
  }
}
