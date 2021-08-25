import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { 

  }

  ngOnInit() {
  }

  removeFromCart(item: Product) {
    this.cartService.removeFromCart(item);
  }

  onSubmit() {
    this.items = this.cartService.clearCart();
    window.alert('Your order has been submitted: '
      + this.checkoutForm.controls['name'].value
      + ' - '
      + this.checkoutForm.controls['address'].value);
    this.checkoutForm.reset();
  }

}