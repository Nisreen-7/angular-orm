import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { PromoService } from '../promo.service';
import { Promo } from '../entities';
import { switchMap } from 'rxjs';  

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit{
  promo?:Promo;
  constructor(private route:ActivatedRoute, private studentService:StudentService, private promoService:PromoService) {}
  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => this.promoService.fetchOne(params['id']))
    ).subscribe(data => this.promo = data);
  }
}
