import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MetaService } from '@services/meta.service';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  imports: [],
})
export class AboutPageComponent implements OnInit {

  private metaService = inject(MetaService);
  private platform = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.metaService.updateMetaData({
      title: 'About Page',
      description: 'Esta é minha pagina About',
      ogTitle: 'About Page',
      keywords: 'Ola, Mundo, Jairo, Soares'
    });

    // Verifica se nao eh servidor
    if (isPlatformBrowser(this.platform)) {
      // document nao esta do lado do servidor, apenas navegador
      document.title = 'Pricing hehe...'
    }
  }

}
