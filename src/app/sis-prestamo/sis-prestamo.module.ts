import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SisPrestamoComponent } from './sis-prestamo.component';
import { SisPrestamoRoutingModule } from './sis-prestamo-routing.module';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { MenuComponent } from './components/menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { ServciesService } from './services/servcies.service';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule} from '@angular/material';
import {MatInputModule, MatCardModule, MatSliderModule} from '@angular/material';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

@NgModule({
  declarations: [
    SisPrestamoComponent,
    SolicitudComponent,
    UsuariosListComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    SisPrestamoRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatSliderModule,
    SnotifyModule
  ],
  providers: [
    ServciesService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults}, 
    SnotifyService
  ],
  bootstrap: [SisPrestamoComponent]
})
export class SisPrestamoModule { }
