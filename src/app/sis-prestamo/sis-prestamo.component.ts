import { Component, OnInit } from '@angular/core';
import { ServciesService } from './services/servcies.service';

@Component({
  selector: 'app-sis-prestamo',
  templateUrl: './sis-prestamo.component.html',
  styleUrls: ['./sis-prestamo.component.css']
})
export class SisPrestamoComponent implements OnInit {
  userData = {
    userId: 'nescorcia',
  }
  bancoData: any;
  constructor(private bancoService: ServciesService) { }

  ngOnInit() {
    localStorage.setItem('User', JSON.stringify(this.userData));
    this.GetBanco();
  }


  GetBanco() {
    this.bancoService.getBanco().subscribe(
      data => {
        this.bancoData = data.banco.monto
       console.log('data', this.bancoData);
      }
    );
  }

}
