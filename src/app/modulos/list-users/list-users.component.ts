import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../config/interface-user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  @Input() arrayUsers: Array<User> = [];
  @Output() irPerfil = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  irUrlPerfil(login: string) {
    this.irPerfil.emit(login);
  }

}
