import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users !: User[];
  constructor(
    private userService : UserService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
   this.userService.getPublicContent().subscribe(
    user => {
      this.users = user as User[]
    }
  );
  }


    first = 0;

    rows = 10;

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    isLastPage(): boolean {
        return this.users ? this.first === (this.users.length - this.rows): true;
    }

    isFirstPage(): boolean {
        return this.users ? this.first === 0 : true;
    }

}
