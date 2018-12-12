import {Component, OnInit} from '@angular/core';
import {NewsApiService} from '../services/news-api-service';
import {HeadlinesResponse} from '../models/headlines-response-model';

@Component({
  selector: 'app-home',
  templateUrl: 'headlines.page.html',
  styleUrls: ['headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {

  constructor(private newsService: NewsApiService) {}

  ngOnInit() {
    this.newsService.getHeadlines().subscribe(
        (response: HeadlinesResponse) => {
          console.log(response.articles);
        },
        (error) => console.log(error) // todo handle error properly
    );
  }
}
