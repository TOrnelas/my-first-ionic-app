import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'headlines',
    pathMatch: 'full'
  },
  {
    path: 'headlines',
    loadChildren: './headlines/headlines.module#HeadlinesPageModule'
  },
  {
    path: 'sources',
    loadChildren: './sources/sources.module#SourcesPageModule'
  },
  { path: 'article-details', loadChildren: './article-details/article-details.module#ArticleDetailsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
