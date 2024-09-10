import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{
  
  model: User
  message!: string;
  result!: string;

  constructor(private userService: UserService, private router: Router) {
    this.model = {
      name: '',
      address: ''
    }
  }

  ngOnInit() {

  }

  onSubmit() {
    this.userService.submitUser(this.model).subscribe({
      next: (response: any) => {
        this.result = `${response.message} <br> Name: ${response.data.name} <br> Address: ${response.data.address}`;
      },
      error: (error: any) => {
        this.result = "Error:";
      }
    });
  }
}
