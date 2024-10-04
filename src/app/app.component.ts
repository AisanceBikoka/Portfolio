import {Component, HostListener} from '@angular/core';
import { RouterModule  } from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { ProjetsComponent } from './pages/projets/projets.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule,
    HeaderComponent, 
    HomeComponent,
    ToolsComponent,
    ProjetsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Aisance-portfolio';
}
