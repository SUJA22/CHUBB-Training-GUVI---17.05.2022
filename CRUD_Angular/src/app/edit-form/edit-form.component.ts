import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../user';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent implements OnInit {
  routeParams: Params | any;
  userlist: any;
  userdata: User = {
    id: '',
    name: '',
    avatar: '',
    createdAt: '',
  };
  index: number = 0;
  constructor(
    private _userService: UserDataService,
    private activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.getRouteParams();
  }
  ngOnInit(): void {
    const response = this._userService.getData().subscribe((data) => {
      this.userlist = data;

      for (let i = 0; i < this.userlist.length; i++) {
        if (this.routeParams.id == this.userlist[i].id) {
          this.index = i;
          break;
        }
      }
      this.userdata.id = this.userlist[this.index].id;
      this.userdata.name = this.userlist[this.index].name;
      this.userdata.avatar = this.userlist[this.index].avatar;
      this.userdata.createdAt = this.userlist[this.index].createdAt;
    });
  }

  getRouteParams() {
    // Route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.routeParams = params;
    });
  }
  updateUser() {
    this._userService.updateData(this.userdata).subscribe(() => {
      alert('Data Updated Successfully');
      (error: any) => {
        console.log(error);
      };
    });
  }
}
