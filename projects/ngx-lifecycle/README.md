# ngx-lifecycle

This library provides output directives for Angular 9+ lifecycle hooks. They can be applied to components and template elements in the following way:

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

To listen to `ngOnChanges`, you need to add an output using both the decorator `Watch` and the function `emitChanges`. This will create an EventEmitter for the respective component or directive.

```ts
import { Watch, emitChanges } from 'ngx-lifecycle';

// property can have any name
@Output() @Watch ngxChanges = emitChanges(this);
```
