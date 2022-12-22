import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctoworld-medicines',
  templateUrl: './doctoworld-medicines.page.html',
  styleUrls: ['./doctoworld-medicines.page.scss'],
})
export class DoctoworldMedicinesPage implements OnInit {

  public segment: string = "herbal";

  constructor(private route: Router) { }

  ngOnInit() {
  }

  item_info() {
    this.route.navigate(['./doctoworld-medicine-info']);
  }
  cart() {
    this.route.navigate(['./doctoworld-cart']);
  }
  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
}
