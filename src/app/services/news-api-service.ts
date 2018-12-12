import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HeadlinesResponse} from '../models/headlines-response-model';
import {Article} from '../models/article-model';

@Injectable()
export class NewsApiService {

    private API_KEY = '4cfaa0380ab644399b73ac5ff77123cb';
    private BASE_URL = 'https://newsapi.org/v2/';

    private articlesCache: Article[] = [];

    constructor(private httpClient: HttpClient) { }

    public getHeadlines(forCountry: string) {

        const params = {
            country: forCountry,
            apiKey: this.API_KEY
        };

        return this.httpClient.get<HeadlinesResponse>(
            this.BASE_URL + 'top-headlines',
            { params: params }
        );
    }

    public addToCache(articles: Article[]) {
        this.articlesCache = this.articlesCache.concat(articles);
    }

    public findArticleByTitle(articleTitle: string): Article {

        for (const article of this.articlesCache) {
            if (article.title === articleTitle) {
                return article;
            }
        }

        return null;
    }
}
