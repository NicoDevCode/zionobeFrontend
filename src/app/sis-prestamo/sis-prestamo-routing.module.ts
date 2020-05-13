import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SisPrestamoComponent } from './sis-prestamo.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';

SolicitudComponent

const routes: Routes = [

  { path: '', component: SisPrestamoComponent, 
      children: [ 
        {path: '', redirectTo: 'solicitud', pathMatch: 'full' },
        {path: 'solicitud', component: SolicitudComponent },
        {path: 'lista', component: UsuariosListComponent },
      ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SisPrestamoRoutingModule { }
