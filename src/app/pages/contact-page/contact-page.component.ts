import { Component, inject, OnInit } from '@angular/core';
import { MetaService } from '@services/meta.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  imports: [],
})
export class ContactPageComponent implements OnInit {


  private metaService = inject(MetaService);

  ngOnInit(): void {
    this.metaService.updateMetaData({
      title: 'Contato',
      description: 'Entre em contato conosco',
      ogTitle: 'Contato',
      keywords: 'contato, email, telefone, endereço'
    });
  }

}
