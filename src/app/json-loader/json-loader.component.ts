import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlDbService } from '../control-db.service'

@Component({
  selector: 'app-json-loader',
  templateUrl: './json-loader.component.html',
  styleUrls: ['./json-loader.component.css'],
})
export class JsonLoaderComponent implements OnInit {
  jsonText: string = '';
  statusMessage: string = '';
  buttonStatus: boolean = true;
  selectedControls: number | null = null;

  constructor(private router: Router, public dbService: ControlDbService) {}

  ngOnInit(): void {}

  selectComponent(index: number){
    this.selectedControls = index;
    this.jsonText = JSON.stringify(this.dbService.getControls()[index], null, 1);
    this.inputHandler();
  }

  displayResult() {
    let index = this.dbService.addControl(JSON.parse(this.jsonText));
    this.router.navigate(['/result', index], { state: { data: this.jsonText } });
  }

  inputHandler() {
    this.buttonStatus = !this.validateJson(this.jsonText);
    if (!this.validateJson(this.jsonText)) {
      this.statusMessage = 'Invalid JSON';
      this.buttonStatus = true;
    } else {
      this.statusMessage = '';
      this.buttonStatus = false;
    }
  }

  validateJson(text: string) {
    try {
      JSON.parse(text);
    } catch (e) {
      return false;
    }
    return true;
  }
}
