import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CounterButtonComponent } from './counter-button/counter-button.component';


@NgModule({
  declarations: [
    CounterButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [CounterButtonComponent]
})
export class AppModule implements DoBootstrap {
  /**
   *
   */
  constructor(private injector: Injector) {
    const counterButton = createCustomElement(CounterButtonComponent, {injector})
    customElements.define('counter-button', counterButton);

  }
  ngDoBootstrap() {}
}
