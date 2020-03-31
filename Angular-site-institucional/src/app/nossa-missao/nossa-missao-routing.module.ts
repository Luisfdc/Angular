import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NossaMissaoComponent } from './nossa-missao.component';

@NgModule({
  imports: [
    RouterModule.forChild([
       {path: 'missao', component: NossaMissaoComponent}
    ])
],
  exports: [RouterModule]
})
export class NossaMissaoRoutingModule { }
