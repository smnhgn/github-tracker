import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { SearchBarComponent } from './overview/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, OverviewComponent, SearchBarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, environment.production ? [] : AkitaNgDevtools.forRoot(), AkitaNgRouterStoreModule.forRoot()],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}],
  bootstrap: [AppComponent],
})
export class AppModule {}
