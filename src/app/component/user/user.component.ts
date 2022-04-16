import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Role } from 'src/app/model/Role';
import { User } from 'src/app/model/User';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [MessageService, ConfirmationService],
  encapsulation: ViewEncapsulation.None,
})
export class UserComponent implements OnInit {
  users!: User[];
  roles!: Role[];

  user: User = new User();

  createNew: boolean = false;
  editUsers: boolean = false;

  selectedRole: number = 3;
  selectedDisable: number = 0;

  constructor(
    private userService: UserService,
    private roleService: RoleService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadData();
    console.log(this.users);
  }

  loadData() {
    this.userService.getListEmployee().subscribe((user: any) => {
      this.users = user;
    });
  }

  first = 0;

  rows = 10;

  editUser(user: User) {
    this.editUsers = true;
    this.user = { ...user };
    console.log(this.user);

    this.fillCbo();
  }


  openNew() {
    this.createNew = true;
    this.user = new User();
    console.log(this.user);

    this.fillCbo();
  }

  fillCbo() {
    this.roleService.getListRole().subscribe((data) => (this.roles = data));
  }

  saveUser(form: NgForm) {
    this.user.role = this.selectedRole;
    this.user.disable = this.selectedDisable;

    console.log(this.user);

    this.userService.saveUser(this.user).subscribe(
      (result) => {
        console.log(result);
        this.logMess('success', 'Successful', 'User is save');
        this.user = new User();
        this.ngOnInit()
        return true;
      },
      (error) => {
        console.log(error);
        this.logMess('fail', 'Have a problem', 'Fail to save');
        return false;
      }
    );

    return false;
  }
  hideDialog() {
    this.createNew = false;
    this.editUsers = false;
  }

  logMess(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
      life: 3000,
    });
  }

  updateUser(form: NgForm) {
    this.user.role = this.selectedRole;
    this.user.disable = this.selectedDisable;

    console.log(this.user);

    this.userService.updateUser(this.user).subscribe(
      (result) => {
        console.log(result);
        this.logMess('success', 'Successful', 'User is update');
        this.user = new User();
        return true;
      },
      (error) => {
        console.log(error);
        this.logMess('fail', 'Have a problem', 'Fail to update');
        return false;
      }
    );
  }
  deleteUser(user: User) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.empName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.userService.deleteUser(user).subscribe(
          (result) => {
            console.log(result);
            this.logMess('success', 'Successful', 'User is delete');
            this.ngOnInit();
          },
          (error) => {
            console.log(error);
            this.logMess('fail', 'Have a problem', 'Fail to delete product');
          }
        );

      },
    });
  }
}
