import { Component, OnInit } from '@angular/core';
import { ControlDbService } from '../control-db.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-controls-display',
  templateUrl: './controls-display.component.html',
  styleUrls: ['./controls-display.component.css'],
})
export class ControlsDisplayComponent implements OnInit {
  inputJson: any = {};
  constructor(private dbService: ControlDbService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let index = Number(this.route.snapshot.paramMap.get('id'));
    this.inputJson = this.dbService.getControl(index);
   }

  generateCss(cssParams: any) {
    return {position: 'absolute', left: cssParams.x + 'px', top: cssParams.y + 'px', width: cssParams.width + 'px', height: cssParams.height + 'px'}
  }
}
