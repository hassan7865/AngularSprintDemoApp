import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
constructor(private userService : UserService){}

users:any
IsLoading:boolean = false
ngOnInit(): void {
  this.AllUsers()
}

AllUsers(){
  this.IsLoading = true
  this.userService.getAllUsers().subscribe({
    next:(res)=>{
     this.users = res.users
     this.IsLoading = false
    }
  })
}

}
