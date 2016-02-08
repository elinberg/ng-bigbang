@Directive({
    selector: '[ngModel]',
    host: {
        "[value]": 'ngModel',
        "(input)": "ngModelChange.next($event.target.value)"
    }
})
class NgModelDirective {
    @Input() ngModel:any; // stored value
    @Output() ngModelChange:EventEmitter; = new EventEmitter() // an event emitter
}