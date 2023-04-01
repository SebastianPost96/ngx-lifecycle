# ngx-lifecycle

This library provides output directives for all Angular 9+ lifecycle hooks. They can be applied to components and template elements in the following way:

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

Import the `NgxLifecycleModule` into your application and apply directives to any component or template element as per above.

To listen to `ngOnChanges`, you need to create an output using the library function `emitChanges`, which will emit input changes to the respective component or directive.

```ts
import { emitChanges } from 'ngx-lifecycle';

// property can have any name
@Output() ngxChanges = emitChanges(this);
```
