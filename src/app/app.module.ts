import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuModule} from './restaurant/menu/menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {fakeBackendProvider} from './helpers/fake-backend';
import {ErrorInterceptor} from './helpers/error.interceptor';
import {SharedModule} from './shared/shared.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {TokenInterceptor} from './shared/interceptor/tokenInterceptor';

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MenuModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
