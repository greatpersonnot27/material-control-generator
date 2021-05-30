import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls-display',
  templateUrl: './controls-display.component.html',
  styleUrls: ['./controls-display.component.css']
})
export class ControlsDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(history.state.data)
  }

}
