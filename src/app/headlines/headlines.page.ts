import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../services/news-api-service';
import { HeadlinesResponse } from '../models/headlines-response-model';
import { Article } from '../models/article-model';
import * as countriesFile from '../other/countries';
import {NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-home',
  templateUrl: 'headlines.page.html',
  styleUrls: ['headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {

    articles: Article[];
    country =  'us';
    allCountries = countriesFile.countries;

    constructor(private newsService: NewsApiService,
                public navCtrl: NavController,
                private storage: Storage) {}

    ngOnInit() {
        this.storage.get('country').then(
            (value) => {
                this.country = value;
                this.getContent();
            });
    }

    onArticleClicked(article: Article) {
        this.navCtrl.navigateRoot('/article-details/' + article.title);
    }

    onCountrySelected() {
        this.storage.set('country', this.country).then(
            (val) => {
                this.getContent();
            });
    }

    getContent() {

        // todo when articles news list is empty, show empty label
        // todo show progress bar while fetching data
        this.newsService.getHeadlines(this.country).subscribe(
            (response: HeadlinesResponse) => {
                this.articles = response.articles;
                this.newsService.addToCache(response.articles);
            },
            (error) => console.log(error) // todo handle error properly
        );
    }
}
