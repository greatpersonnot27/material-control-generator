import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-json-loader',
  templateUrl: './json-loader.component.html',
  styleUrls: ['./json-loader.component.css'],
})
export class JsonLoaderComponent implements OnInit {
  jsonText: string = '';
  statusMessage: string = '';
  buttonStatus: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  displayResult() {
    this.router.navigate(['/result'], { state: { data: this.jsonText } });
  }

  inputHandler() {
    this.buttonStatus = !this.validateJson(this.jsonText);
  }

  validateJson(text: string) {
    try {
      JSON.parse(text);
      this.statusMessage = 'No mistakes found!';
      return true;
    } catch (e) {
      this.statusMessage = e.message;
      return false;
    }
  }
}
