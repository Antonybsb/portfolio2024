import { Component, signal } from '@angular/core';
import { SocialIcons } from '../../interface/socialIcons.interface';

@Component({
  selector: 'app-banner-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './banner-portfolio.component.html',
  styleUrl: './banner-portfolio.component.css'
})
export class BannerPortfolioComponent {

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
