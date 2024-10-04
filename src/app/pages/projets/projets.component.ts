import { Component, inject, viewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [
MatCardModule,
MatIconModule, 
MatMenuTrigger, 
MatMenu, 
MatMenuItem
  ],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.scss'
})
export class ProjetsComponent {
  readonly menuTrigger = viewChild.required(MatMenuTrigger);

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(ProjetsComponent, {restoreFocus: false});
    dialogRef.afterClosed().subscribe(() => this.menuTrigger().focus());
  }

}