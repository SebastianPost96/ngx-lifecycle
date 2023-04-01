# ngx-lifecycle

Lifecycle extension library for Angular 9+.

This library provides directives that emit outputs for all lifecycle hooks. These can be applied to components and elements in the following manner:

```html
<my-component
  (ngxInit)="log('init')"
  (ngxDestroy)="log('destroy')"
  (ngxChanges)="log('changes', $event)"
  (ngxViewInit)="log('view Init')"
  (ngxViewChecked)="log('view checked')"
  (ngxContentInit)="log('content init')"
  (ngxContentChecked)="log('content checked')"
  (ngxDoCheck)="log('do check')"
>
</my-component>
```

## Usage

Import the `NgxLifecycleModule` into your application.

Apply the directives to any template element as per above.

To listen to `ngOnChanges`, you will need to create an output using the library function `emitChanges`, which will emit input changes to the respective component or directive.

```ts
import { emitChanges } from 'ngx-lifecycle';

// property can have any name
@Output() ngxChanges = emitChanges(this);
```
