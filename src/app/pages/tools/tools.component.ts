import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss'
})
export class ToolsComponent {

}
