import { Component } from '@angular/core';
import { OilTableService } from './oil-table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers:[OilTableService]

})
export class AppComponent {
  title = 'oilfinder';
}
