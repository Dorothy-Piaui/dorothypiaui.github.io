import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { CapaComponent } from "./capa/capa.component";
import { RealizacoesComponent } from "./realizacoes/realizacoes.component";
import { ParticipacoesComponent } from './participacoes/participacoes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    WelcomeComponent, 
    CapaComponent,
    RealizacoesComponent,
    ParticipacoesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dorothy Piauí';
}
