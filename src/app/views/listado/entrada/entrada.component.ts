import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Entrada } from 'src/app/shared/interfaces/entrada';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent {
  // Atributos con decoradores
  @Input()
  public entrada: Entrada;
  @Output()
  public doEvent: EventEmitter<string>;

  constructor() {
    this.entrada = { title: '', body: '', id: 1, userId: 1 };
    this.doEvent = new EventEmitter<string>();
  }

  public sendTitle(): void {
    this.doEvent.emit(this.entrada.title as string);
  }

}
