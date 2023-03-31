# ngx-lifecycle

Lifecycle extension library for Angular.

This library provides Directive that emit outputs for all lifecycle hooks in the following manner:

```html
<my-component
  (ngxInit)="log('init')"
  (ngxDestroy)="log('destroy')"
  (ngxChanges)="log('changes', $event)"
  (ngxViewInit)="log('view Init')"
  (ngxDoCheck)="log('do check')"
  (ngxContentChecked)="log('content checked')"
  (ngxContentInit)="log('content init')"
  (ngxViewChecked)="log('view checked')"
>
</my-component>
```

## Usage

Apply the directives to any template element like in the example above.

To listen to `ngOnChanges` you will need to create an output in your component using a library function, like this:

```ts
// Output property can have any name
@Output() ngxChanges = emitChanges(this);
```
