import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearBootComponent } from './crear-boot/crear-boot.component';
import { from } from 'rxjs';
import { TagInputModule } from 'ngx-chips';
import { MainComponent } from './main/main.component';
import { InvalidTooltipModule } from 'ng-invalid-tooltip';

TagInputModule.withDefaults({
  tagInput: {
      placeholder: 'what',
      // add here other default values for tag-input
  },
  dropdown: {
      displayBy: 'my-display-value',
      // add here other default values for tag-input-dropdown
  }
});

@NgModule({
  declarations: [
    AppComponent,
    CrearBootComponent,
    MainComponent
  ],
  imports: [
    TagInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InvalidTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
