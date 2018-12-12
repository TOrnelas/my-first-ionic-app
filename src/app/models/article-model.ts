import { Source } from './source-model';

export class Article {
    constructor(
       public author: string,
       public content: string,
       public description: string,
       public publishedAt: string,
       public source: Source,
       public title: string,
       public url: string,
       public urlToImage: string
    ){ }
}