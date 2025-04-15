import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MetaData } from '../interface/meta.interface';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  updateMetaData(data: MetaData): void {
    // Update title
    this.title.setTitle(data.title);

    // Update meta tags
    if (data.description) {
      this.meta.updateTag({
        name: 'description',
        content: data.description
      });
    }

    if (data.ogTitle) {
      this.meta.updateTag({
        name: 'og:title',
        content: data.ogTitle
      });
    }

    if (data.keywords) {
      this.meta.updateTag({
        name: 'keywords',
        content: data.keywords
      });
    }
  }
}
