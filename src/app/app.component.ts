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
  loading = false;
  error = false;
  success = false;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.loading = true;
    this.appService.getStatement().subscribe((data: any[]) => {
      this.loading = false;
      this.success = true;
      console.log(data);
      this.statement = data;
    }, error => {
      this.loading = false;
      this.error = true;
      console.log(error);
    });
  }
}