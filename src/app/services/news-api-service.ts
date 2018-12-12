import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {HeadlinesResponse} from '../models/headlines-response-model';

@Injectable()
export class NewsApiService {

    private API_KEY = '4cfaa0380ab644399b73ac5ff77123cb';
    private BASE_URL = 'https://newsapi.org/v2/';

    constructor(private httpClient: HttpClient) { }

    public getHeadlines() {

        const params = {
            country: 'us',
            apiKey: this.API_KEY
        };

        return this.httpClient.get<HeadlinesResponse>(
            this.BASE_URL + 'top-headlines',
            { params: params }
        );
    }
}
