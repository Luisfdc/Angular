import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ContatoModule } from './contato/contato.module';
import { NossaMissaoModule } from './nossa-missao/nossa-missao.module';
import { QuemSomosModule } from './quem-somos/quem-somos.module';

@NgModule({
  imports: [
    ContatoModule,
    NossaMissaoModule,
    QuemSomosModule,
    RouterModule.forRoot([
    {path: '', component: QuemSomosComponent},
  ])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
