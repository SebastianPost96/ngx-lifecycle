# ngx-lifecycle

Lifecycle extension library for Angular.

This library provides Directive that emit outputs for all lifecycle hooks in the following manner:

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

Apply the directives to any template element like in the example above.

To listen to `ngOnChanges` you will need to create an output in your component using a library function, like this:

```ts
import { emitChanges } from 'ngx-lifecycle';

// Output property can have any name
@Output() ngxChanges = emitChanges(this);
```
