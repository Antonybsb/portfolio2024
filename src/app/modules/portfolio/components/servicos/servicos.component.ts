import { Component, signal } from '@angular/core';
import { Portfolio } from '../../interface/portfolio';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {

  public arrayPortfolio = signal<Portfolio[]>([
    {
      img: 'https://mdbcdn.b-cdn.net/img/new/standard/people/033.jpg',
      title: 'Projeto 01',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat vel quo quisquam accusamus in qui at ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum distinctio eum neque',
      link: ''
    },
    {
      img: 'assets/prints/menu2.png',
      title: 'Projeto 02',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sint, repellat vel quo quisquam accusamus in qui at ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum distinctio eum ',
      link: 'https://modelmenuonline.000webhostapp.com/'
    },

  ]);

}


