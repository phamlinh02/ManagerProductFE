import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  styles: [
    `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `,
  ],
  providers: [MessageService, ConfirmationService],
})
export class UserComponent implements OnInit {
  users!: User[];

  userDialog!: boolean;

  user!: User;

  selectedUser!: User[];

  submitted!: boolean;
  status!: any[];

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.userService.getPublicContent().subscribe((user) => {
      this.users = user as User[];
    });

    this.status =[
      {label : 'Admin', value: 'instock'},
      {label : 'Staff', value : 'lowstock'},
      {label : 'Employee', value : 'outostock'}
    ];
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
    return this.users ? this.first === this.users.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.users ? this.first === 0 : true;
  }

  openNew(){
    this.user = new User;
    this.submitted = false;
    this.userDialog = true;
  }

  deleteSelectedUsers(){
    this.confirmationService.confirm({
      message : 'Are you sure you want to delete the selected users??',
      header : 'Confirm',
      icon : 'pi pi-exclamation-triangle',
      accept : ()=>{
        this.users = this.users.filter(
          e => !this.selectedUser.includes(e)
        );
        this.selectedUser.forEach(
          e => this.userService.
        );
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Users Deleted', life: 3000})
      }
    });
  }

  editUser()
}
