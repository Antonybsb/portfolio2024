import { Component } from '@angular/core';

//Components

//Font Awesome
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { DicasComponent } from '../../components/dicas/dicas.component';
import { NegocioInternetComponent } from '../../components/negocio-internet/negocio-internet.component';
import { PerguntasFrequentesComponent } from '../../components/perguntas-frequentes/perguntas-frequentes.component';
import { BannerHomeComponent } from '../../components/banner-home/banner-home.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerHomeComponent, DicasComponent, NegocioInternetComponent, PerguntasFrequentesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  faCoffee = faCoffee;

}
