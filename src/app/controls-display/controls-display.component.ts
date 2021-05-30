import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls-display',
  templateUrl: './controls-display.component.html',
  styleUrls: ['./controls-display.component.css'],
})
export class ControlsDisplayComponent implements OnInit {
  inputJson: any = {};
  constructor() {}

  ngOnInit(): void {
    this.inputJson = JSON.parse(history.state.data);
  //   this.inputJson = {
  //     controls: [
  //       {
  //         type: 'Button',
  //         x: 110,
  //         y: 20,
  //         width: 800,
  //         height: 40,
  //         text: 'Button',
  //       },
  //       {
  //         type: 'Label',
  //         x: 10,
  //         y: 600,
  //         width: 80,
  //         height: 400,
  //         text: 'Label',
  //       },
  //       {
  //         type: 'Slider',
  //         x: 102,
  //         y: 810,
  //         width: 100,
  //         value: 50,
  //       },
  //     ],
  //   };
   }

  generateCss(cssParams: any) {
    return {position: 'absolute', left: cssParams.x + 'px', top: cssParams.y + 'px', width: cssParams.width + 'px', height: cssParams.height + 'px'}
  }
}
