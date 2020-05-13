import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ServciesService } from '../../services/servcies.service';
import {SnotifyService, SnotifyPosition} from 'ng-snotify';
@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;
  body:any;
  nombre: string;
  cedula: string;
  aprobado: any;
  Id: string;
  data: any;
  bandera = false;
  constructor(private snotifyService: SnotifyService,
              private userService: ServciesService) { }

  ngOnInit() {
    
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  getUserId =   (Id) =>{
    this.Id = Id;
    let test = false;
    this.userService.getUserId(this.Id).subscribe(
      data => {
        this.data = data.users
        for(let i = 0; i < this.data.length; i ++){ 
           if(this.data[i].estado === 'pendiente'){
             test = true
             console.log
             return this.bandera =  true
           }
        }
      }
    );
  }

 enviarSolicitud =  async () => {
    this.getUserId(this.cedula);
    this.aprobado =  Math.round(Math.random() * (1 - 0) + 0)

    console.log('aprobado',this.aprobado )

    this.body = {
      userId: this.cedula,
      name: this.nombre,
      monto: this.value,
      email: this.email.value,
      aprobado: this.aprobado
    };
    
    setTimeout( () =>{ 
      if (this.bandera == true) {
        this.snotifyService.error(`${this.nombre} Tienes creditos por pagar`, 'Try again!', { timeout: 2000, showProgressBar: false, closeOnClick: true, position: SnotifyPosition.rightTop });
      } else {
      this.userService.enviarSolicitus(this.body).subscribe(
          (data) => {
            console.log(data);
            if (data.aprobado == false && data.nuevo == true) {
              this.snotifyService.error(`${this.nombre} Tu credito no fue aprobado`, 'Try again!', { timeout: 2000, showProgressBar: false, closeOnClick: true, position: SnotifyPosition.rightTop });
            } else {
              if(data.aprobado == false && data.existe == false) {
                this.snotifyService.error(`${this.nombre} No tienes permitido tener creditos`, 'Try again!', { timeout: 2000, showProgressBar: false, closeOnClick: true, position: SnotifyPosition.rightTop });
              }else {
                this.snotifyService.success(`Feliitacines ${this.nombre} credito fue aprobado`, 'Success', { timeout: 2000, showProgressBar: false, closeOnClick: true, position: SnotifyPosition.rightTop });
              }
            }
          }, (error => {
            console.log(error);
          })
        );
  
      }
    }, 1000);
  }

}
