import { Component, signal } from '@angular/core';
import { Skills } from '../../interface/skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  public arraySkills = signal<Skills[]>([
    {
      src: 'assets/skills/angular.svg',
      alt: 'Ícone angular'
    },
    {
      src: 'assets/skills/bootstrap.svg',
      alt: 'Ícone bootstrap'
    },
    {
      src: 'assets/skills/css.svg',
      alt: 'Ícone css'
    },
    {
      src: 'assets/skills/html5.svg',
      alt: 'Ícone html5'
    },
    {
      src: 'assets/skills/java.svg',
      alt: 'Ícone java'
    },
    {
      src: 'assets/skills/mySql.svg',
      alt: 'Ícone mySql'
    },
    {
      src: 'assets/skills/postman.svg',
      alt: 'Ícone postman'
    },
    {
      src: 'assets/skills/springboot.svg',
      alt: 'Ícone springboot'
    },
    {
      src: 'assets/skills/tailwind.svg',
      alt: 'Ícone tailwind'
    },
    {
      src: 'assets/skills/typeScript.svg',
      alt: 'Ícone typeScript'
    },
    {
      src: 'assets/skills/corel.svg',
      alt: 'Ícone corel'
    },
    {
      src: 'assets/skills/photoShop.svg',
      alt: 'Ícone photoShop'
    }
  ])

}
