import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlDbService {
  controlsDb: [any];
  unnamedIndex: number;

  constructor() {
    this.unnamedIndex = 1;
    this.controlsDb = [{
      "name" : "Deafult Control",
     "controls": [{
       "type": "Button",
       "x": 10,
       "y": 20,
       "width": 80,
       "height": 40,
       "text": "Button"
     },
     {
       "type": "Label",
       "x": 10,
       "y": 60,
       "width": 80,
       "height": 40,
       "text": "Label"
     },
     {
       "type": "Slider",
       "x": 10,
       "y": 80,
       "width": 100,
       "value": 50
     }]}
    ];
  }

  addControl(control: any) {
    if (!('name' in control) || control.name.startsWith('Unnamed #')) {
      control.name = 'Unnamed #' + this.unnamedIndex;
      this.unnamedIndex += 1;
    }

    this.controlsDb.push(control);
    return this.controlsDb.length - 1;
  }

  getControls(limit: number = 10) {
    return this.controlsDb.slice(-1 * limit);
  }

  getControl(index: number) {
    return this.controlsDb[index];

  }
}
