import { Component, signal } from '@angular/core';

//Angular material
import { MatExpansionModule } from '@angular/material/expansion';
import { PerguntasFrequentes } from '../../interface/perguntas-frequentes';

@Component({
  selector: 'app-perguntas-frequentes',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './perguntas-frequentes.component.html',
  styleUrl: './perguntas-frequentes.component.css',
})
export class PerguntasFrequentesComponent {
  panelOpenState = false;

  public arrayPerguntas = signal<PerguntasFrequentes[]>([
    {
      title: ' O que é um site ou loja virtual?',
      response: ' Um site ou loja virtual é uma plataforma online onde empresas ou indivíduos podem exibir informações sobre produtos, serviços ou conteúdo, permitindo que os clientes comprem produtos ou interajam com o conteúdo de forma remota, através da internet. ',
    },
    {
      title: ' Quais são os benefícios de ter um site ou loja virtual?',
      response: ' Os benefícios incluem: alcance global de clientes, disponibilidade 24 horas por dia, redução de custos operacionais, facilidade de atualização de informações, análise de dados para melhorar o desempenho, e maior conveniência para os clientes. ',
    },
    {
      title: ' Quanto custa para criar um site ou loja virtual?',
      response: ' O custo pode variar dependendo das funcionalidades desejadas, complexidade do design, necessidades de desenvolvimento e integrações específicas. Existem opções acessíveis, como plataformas de criação de sites, e também serviços mais personalizados oferecidos por desenvolvedores profissionais. ',
    },
    {
      title: ' Como atrair clientes para o meu site ou loja virtual?',
      response: ' Estratégias de marketing digital, como SEO (otimização para mecanismos de busca), publicidade online, mídia social, email marketing e conteúdo relevante, podem ajudar a atrair tráfego qualificado para o seu site. Oferecer uma experiência de usuário positiva e valor agregado também é fundamental para reter clientes. ',
    },
  ]);
}
