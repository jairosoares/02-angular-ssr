import { Component, inject, OnInit } from '@angular/core';
import { MetaService } from '@services/meta.service';

@Component({
  selector: 'price-page',
  templateUrl: './price-page.component.html',
  imports: [],
})
export class PricePageComponent implements OnInit {


  private metaService = inject(MetaService);

  ngOnInit(): void {
    this.metaService.updateMetaData({
      title: 'Preços',
      description: 'Conheça nossos planos e preços',
      ogTitle: 'Preços',
      keywords: 'preços, planos, valores, custos'
    });
  }

}
