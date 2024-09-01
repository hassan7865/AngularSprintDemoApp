import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
  userId:any
  user:any
  IsLoading:boolean= false
  constructor(private activateRoute : ActivatedRoute,private userService : UserService){
    activateRoute.params.subscribe({
      next:(value)=>{
        this.userId = value['id']
        console.log(this.userId)
      }
    })
  }
  ngOnInit(): void {
    this.GetUser()
  }

  GetUser(){
    this.IsLoading = true
    this.userService.getUser(this.userId).subscribe({
      next:(res)=>{
        this.user = res
        this.IsLoading = false
      }
    })
  }



}
