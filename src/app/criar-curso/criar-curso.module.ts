import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from '../criar-curso/criar-curso.component';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [CriarCursoComponent],
  // providers: [CursosService], // services are declared here
})
export class CriarCursoModule { }
