import { Component, OnInit } from '@angular/core';
import { ApiList, Promo } from '../entities';
import { PromoService } from '../promo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  promos:Promo[] = [];

  constructor(private promoService:PromoService){}

  ngOnInit(): void {
    this.promoService.fetchAll().subscribe(data => this.promos = data['hydra:member']);
  }
}
