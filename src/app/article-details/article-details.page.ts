import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../models/article-model';
import { NewsApiService } from '../services/news-api-service';
import { NavController } from '@ionic/angular';
// import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.page.html',
  styleUrls: ['./article-details.page.scss'],
})
export class ArticleDetailsPage implements OnInit {

  article: Article;

  constructor(private route: ActivatedRoute,
              private newsService: NewsApiService,
              private navController: NavController,
              /*private iab: InAppBrowser*/) { }

  ngOnInit() {
    this.article = this.newsService.findArticleByTitle(this.route.snapshot.params['articleTitle']);

    if (!this.article) {
      this.navController.goBack(true);
    }
  }

  onUrlClicked(articleUrl: string) {
    // this.iab.create(articleUrl);
  }
}
