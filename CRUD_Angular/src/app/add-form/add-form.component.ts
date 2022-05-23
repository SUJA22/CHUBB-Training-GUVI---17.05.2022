import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(private userService: UserDataService) {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('',Validators.required),
      avatar: new FormControl('',Validators.required),
      createdAt: new FormControl('',Validators.required),
    });
  }

  ngOnInit(): void {}
  postUser() {
    console.log(this.userForm.value.input_id);
    this.userService.postData(this.userForm.value).subscribe((data) => {
      alert('User Added Successfully!');
    });
    this.userForm.reset();
  }
}
