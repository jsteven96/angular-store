import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // No debe ser asíncrono lo que se coloque aquí
    // Es para inicializar variables que no se asignan en su declaración
    // Before rendering
    console.log('Constructor');
    console.log('-'.repeat(10));
  }


  ngOnDestroy(): void {
    // when component is destroyed
    console.log('OnDestroy');
    window.clearInterval(this.counterRef);
  }

  ngAfterViewInit(): void {
    // after render
    // when childs where rendered
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnInit(): void {
    // Component's inicializer
    // After render
    // Just runs once
    // Async, promises, observables, subscriptions, ...
    console.log('ngOnInit');
    console.log('duration ', this.duration);
    console.log('message ', this.message);
    console.log('-'.repeat(10));
    this.counterRef = window.setInterval(() => {
      console.log('run interval');
      this.counter.update(statePrev => statePrev + 1);
    }, 1000)
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Before and during render
    console.log('OnChanges. These are the changes: ');
    console.log(changes);
    console.log('-'.repeat(10));
    const changeOnDuration = changes['duration'];
    if(changeOnDuration && changeOnDuration.previousValue !== changeOnDuration.currentValue) {
      this.doSomething();
    }
  }

  doSomething() {
    console.log('change duration');
  }

}
