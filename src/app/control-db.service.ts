import { Injectable } from '@angular/core';
import { defaultControllers } from './default-controllers';

@Injectable({
  providedIn: 'root',
})
export class ControlDbService {
  controlsDb: [any];
  unnamedIndex: number;

  constructor() {
    this.unnamedIndex = 1;
    this.controlsDb = [{}];
    this.loadState();
  }

  addControl(control: any) {
    if (!('name' in control) || control.name.startsWith('Unnamed #')) {
      control.name = 'Unnamed #' + this.unnamedIndex;
      this.unnamedIndex += 1;
    }
    let index = this.controlsDb.findIndex((comp) => comp.name == control.name);
    if (index == -1) {
    this.controlsDb.push(control);
    } else {
      this.controlsDb[index] = control;
      return index;
    }
    this.saveState()
    return this.controlsDb.length - 1;
  }

  getControls(limit: number = 10) {
    return this.controlsDb.slice(-1 * limit);
  }

  getControl(index: number) {
    return this.controlsDb[index];
  }

  saveState() {
    localStorage.setItem('controls', JSON.stringify(this.controlsDb));
    localStorage.setItem('unnamedIndex', String(this.unnamedIndex));
  }

  loadState() {
    let state = localStorage.getItem('controls');
    if (state == null) {
      this.controlsDb = defaultControllers;
    } else {
      this.controlsDb = JSON.parse(state);
    }

    let index = localStorage.getItem('unnamedIndex');
    this.unnamedIndex = index == null ? 1 : Number(index);
  }
}
