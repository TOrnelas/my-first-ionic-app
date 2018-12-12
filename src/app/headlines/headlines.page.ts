import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../services/news-api-service';
import { HeadlinesResponse } from '../models/headlines-response-model';
import { Article } from '../models/article-model';
import * as countriesFile from '../other/countries';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'headlines.page.html',
  styleUrls: ['headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {

    articles: Article[];
    country = 'us'; // todo save country on local storage
    allCountries = countriesFile.countries;

    constructor(private newsService: NewsApiService,
                public navCtrl: NavController) {}

    ngOnInit() {
        this.getContent();
        console.log(this.allCountries.length);
    }

    onArticleClicked(article: Article) {
        this.navCtrl.navigateForward('/article-details', true);
    }

    onCountrySelected() {
        this.getContent();
    }

    getContent() {

        // todo when articles news list is empty, show empty label
        // todo show progress bar while fetching data

        this.newsService.getHeadlines(this.country).subscribe(
            (response: HeadlinesResponse) => this.articles = response.articles,
            (error) => console.log(error) // todo handle error properly
        );
    }
}
