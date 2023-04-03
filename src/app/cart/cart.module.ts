import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { cartRoutes } from './cart.routes';
import { MfCartModule } from 'mf-cart';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(cartRoutes),
    MfCartModule.forChild(),
  ],
})
export class CartModule {}
