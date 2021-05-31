import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlsDisplayComponent } from './controls-display/controls-display.component';
import { JsonLoaderComponent } from './json-loader/json-loader.component';

const routes: Routes = [
  { path: '', component: JsonLoaderComponent },
  { path: 'result/:id', component: ControlsDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
