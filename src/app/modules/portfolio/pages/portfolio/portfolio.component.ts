import { Component } from '@angular/core';

import { BannerPortfolioComponent } from '../../components/banner-portfolio/banner-portfolio.component';
import { ServicosComponent } from '../../components/servicos/servicos.component';
import { SkillsComponent } from '../../components/skills/skills.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [BannerPortfolioComponent, ServicosComponent, SkillsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
