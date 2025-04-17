import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MetaData } from '../interface/meta.interface';

/**
 * Serviço responsável por gerenciar os metadados SEO (Search Engine Optimization) da aplicação.
 * Este serviço centraliza a atualização de tags meta e título da página, garantindo
 * uma implementação consistente de SEO em toda a aplicação.
 *
 * @example
 *
 * ngOnInit() {
 *   this.metaService.updateMetaData({
 *     title: 'Página Principal',
 *     description: 'Descrição da página',
 *     keywords: 'palavras, chave',
 *     ogTitle: 'Título para redes sociais'
 *   });
 * }
 */
@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  /**
   * Atualiza os metadados da página atual.
   * Este método configura o título da página e as tags meta necessárias
   * para otimização nos mecanismos de busca.
   *
   * @param data - Objeto contendo os metadados a serem atualizados
   * @example
   * metaService.updateMetaData({
   *   title: 'Minha Página',
   *   description: 'Descrição da minha página',
   *   keywords: 'palavras, chave',
   *   ogTitle: 'Título para compartilhar'
   * });
   */
  updateMetaData(data: MetaData): void {

    this.title.setTitle(data.title);

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

    if (data.ogImage) {
      this.meta.updateTag({
        name: 'og:image',
        content: data.ogImage
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
