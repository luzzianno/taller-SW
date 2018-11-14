# ng-invalid-tooltip

This library provides you with a simple directive that you can add to your Angular for controls, that will show a warning tooltip whenever they contain invalid values. 

Features:

* Very easy to use: All you need to do is supply the directive with what you want to show for each kind of error
* Customized specifically for invalid values: It automatically detects whenever the form control becomes invalid, and shows the appropriate text depending on the error.
* Floats on top of everything: The tooltip is actually attached to the root component of the app, so it is not affected by the context in which the form control is placed
* Does not clutter: Only shows when the component is focused and not covered by other components

## Further Customization
You might notice that the tooltip is not very customizable. I will implement customization on a need-basis, so whenever you feel that a new feature is desired in this tool, just open an issue explaining your proposal, and I will evaluate the request and implement it if suitable.

## Demo
https://plnkr.co/edit/lGEQZPDdSbyU5nPPdfsV?p=preview

## Installation

To install this library, run:

```bash
$ npm install ng-invalid-tooltip --save
```

## Using the library

After installing the library, go to your module and import **InvalidTooltipModule**. For example:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { InvalidTooltipModule } from 'ng-invalid-tooltip';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the library as an import
    InvalidTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use the invalidTooltip directive as follows:

```xml
<input type="text" required pattern="[A-Za-z0-9]+" [(ngModel)]="someModel" [invalidTooltip]="{required: 'This field is required', pattern: 'Only alphanumerical characters are allowed'}">
```
This will cause the text "This field is required" to show in the tooltip whenever the field is not provided, and the text "Only alphanumerical characters are allowed" to show when the pattern is violated.

Note that the tooltip will not work if the input field does not have an Angular form control attached to it. That is, it must have ngModel, formControlName, or any other alternative from Angular form control directives.
## License

MIT © [AbdulRahmanAlHamali](mailto:a.alhamali@saugo360.com)
