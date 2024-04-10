import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

//Interface
import { SocialIcons } from '../../interface/socialIcons.interface';




@Component({
  selector: 'app-section',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

  public arraySocialIcons = signal<SocialIcons[]>([
    {
      href: 'https://www.linkedin.com/in/antony-diego/',
      src: 'assets/social-icons/linkedIn.svg',
      alt: 'Ícone LinkedIn'
    },
    {
      href: 'https://github.com/Antonybsb',
      src: 'assets/social-icons/gitHub.svg',
      alt: 'Ícone GitHub'
    }
  ])







}
