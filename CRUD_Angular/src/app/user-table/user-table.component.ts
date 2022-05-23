import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

import { User } from '../user';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  providers: [UserDataService],
})
export class UserTableComponent implements OnInit {
  constructor(private _userService: UserDataService) {}
  public userlist: any;
  user_id: string = '';
  user_name: string = '';
  user_avatar: string = '';
  user_date: any = [];
  ngOnInit(): void {
    const response = this._userService.getData().subscribe((data) => {
      this.userlist = data;
    });
  }
  public deleteUser(userId: string) {
    if (confirm('Are you sure you want to delete this data?')) {
      this._userService.deleteData(userId).subscribe((data: any) => {
        alert('Data Deleted Successfully!');
        this.ngOnInit();
      });
    }
  }
}
