import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';

import { AlertModule,CarouselModule } from 'ng2-bootstrap';
import {TabMenuModule,MenuItem,DataTableModule,SharedModule,EditorModule,GalleriaModule,ScheduleModule,DialogModule,CalendarModule,CheckboxModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProgramsComponent,
    ResourcesComponent,
    CatalogComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    TabMenuModule,
    DataTableModule,
    SharedModule,
    EditorModule,
    GalleriaModule,
    ScheduleModule,
    DialogModule,
    CalendarModule,
    CheckboxModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
