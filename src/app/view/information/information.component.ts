import { Component } from '@angular/core';
import { SplitterModule } from 'primeng/splitter';
import { CardModule} from 'primeng/card';
import "primeicons/primeicons.css";

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [
    SplitterModule,
    CardModule
  ],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {

}
