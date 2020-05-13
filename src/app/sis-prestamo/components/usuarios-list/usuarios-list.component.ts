import { Component, OnInit } from '@angular/core';
import { ServciesService } from '../../services/servcies.service';
import { Users } from '../../models/users';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {
  
  users: Users;
  userId: string;
  Id: string;
  aprbado = true;
  estadoAprobado: any;
  sowDetail = true;
  sowMonto = false;
  pagar: any;
  constructor(private userService: ServciesService) {
    const userId = JSON.parse(localStorage.getItem('User')); ;
    this.Id = userId.userId
    console.log('UserId',this.Id)
   }

  ngOnInit() {
    this.GetUsers();
  }



  GetUsers() {
    this.sowDetail = true;
    this.sowMonto = false;
    this.userService.getUsers().subscribe(
      data => {
       this.users = data.users;
      }
    );
  }

   getUserId(Id){
     this.sowMonto = true;
     this.sowDetail = false;
     this.Id = Id;
     this.userService.getUserId(this.Id).subscribe(
       data => {
        console.log('data', data);
        this.users = data.users;
       }
     );
   }


   getUsuarioEstado(bool){
     this.sowDetail = false;
     this.sowMonto = false;
     this.aprbado = bool
     this.userService.getUsuarioEstado(this.aprbado).subscribe(
       data => {
         this.users = data.users
         console.log('data', this.users);
       }
     );
   }

   pagarCredito(id, monto, aprobado, userId){
    this.pagar = {
        monto: monto,
        aprobado: aprobado,
        userId: userId,
        estado: 'pagado',
        Id: id,
    }

    this.userService.pagarCredito(this.pagar).subscribe(
      data => {
        console.log('data', data);
      }
    );
  }

}
