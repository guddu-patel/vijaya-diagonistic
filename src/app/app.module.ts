import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RequestCallHeaderComponent } from './components/request-call-header/request-call-header.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { HomeCollectionComponent } from './components/home-collection/home-collection.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeCollectionSummaryComponent } from './components/home-collection-summary/home-collection-summary.component';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimatedNumberComponent } from './common-component/animated-number/animated-number.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RequestCallHeaderComponent,
    HomeCarouselComponent,
    HomeCollectionComponent,
    HomeCollectionSummaryComponent,
    AnimatedNumberComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgSelectModule,
    ToastModule,
    MessageModule,
    MessagesModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
