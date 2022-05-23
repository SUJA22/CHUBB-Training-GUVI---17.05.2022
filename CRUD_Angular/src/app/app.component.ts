import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CRUD_Angular';
  public userlist: any;
  constructor(private _userService: UserDataService){};
  ngOnInit(){
    const response = this._userService.getData().subscribe((data) => {
      this.userlist = data;
    });
  }
}
