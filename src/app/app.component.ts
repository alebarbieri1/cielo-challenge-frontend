import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'cielo-challenge-app';
  statement = [];

  constructor(private appService: AppService) {}

  ngOnInit(){
    this.appService.getStatement().subscribe((data: any[]) => {
      console.log(data);
      this.statement = data;
    });
  }
}