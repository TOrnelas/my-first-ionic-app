import { Article } from './article-model';

export class HeadlinesResponse {
    constructor(
        public totalResults: number,
        public articles: Article[]
    ) { }
}