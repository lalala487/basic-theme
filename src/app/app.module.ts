import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { BoardComponent } from './board/board.component';
import { VideoconfComponent } from './videoconf/videoconf.component';
import { LogoComponent } from './shared/common/component/logo/logo.component';
import { LoadingComponent } from './shared/common/component/loader/loading/loading.component';
import { DialogErrorComponent } from './shared/common/component/dialog-error/dialog-error.component';
import { HeaderComponent } from './shared/common/component/header/header.component';
import { FooterComponent } from './shared/common/component/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ScrollPageComponent } from './pages/scroll-page/scroll-page.component';




@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    VideoconfComponent,
    LogoComponent,
    LoadingComponent,
    DialogErrorComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    ScrollPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
