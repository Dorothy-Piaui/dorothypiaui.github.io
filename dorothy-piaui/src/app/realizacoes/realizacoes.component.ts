import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-realizacoes',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule],
  templateUrl: './realizacoes.component.html',
  styleUrl: './realizacoes.component.css'
})
export class RealizacoesComponent {

}
