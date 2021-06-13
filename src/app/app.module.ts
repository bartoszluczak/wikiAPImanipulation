import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputFormComponent } from './input-form/input-form.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Modules
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { GetDataServerService } from './services/get-data-server.service';
import { HighlightSearchPipe } from './shared/pipes/highlight-search.pipe';
import { ReplaceStringPipe } from './shared/pipes/replace-string.pipe';
@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    ListComponentComponent,
    HighlightSearchPipe,
    ReplaceStringPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [GetDataServerService, ReplaceStringPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
