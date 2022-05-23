import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../user';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
})
export class UserViewComponent implements OnInit {
  userdata: User = {
    id: '',
    name: '',
    avatar: '',
    createdAt: '',
  };
  routeParams: Params | any;
  userlist: any;
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
}
