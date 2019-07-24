import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { DatosService } from './Service/datos.service';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ConsultarComponent } from './consultar/consultar.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { PendienteComponent } from './pendiente/pendiente.component';
import { SearchPipe } from './search.pipe';
import { VisitanteComponent } from './visitante/visitante.component';
import { AdminComponent } from './admin/admin.component';
import { ModerarComponent } from './moderar/moderar.component';

registerLocaleData(zh);



const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'student', component: StudentComponent },
  { path: 'visitante', component: VisitanteComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '*', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    StudentComponent,
    ConsultarComponent,
    CalificacionesComponent,
    PendienteComponent,
    SearchPipe,
    VisitanteComponent,
    AdminComponent,
    ModerarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DatosService, { provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
