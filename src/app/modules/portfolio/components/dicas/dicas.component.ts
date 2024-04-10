import { Component, signal } from '@angular/core';
import { Dicas } from '../../interface/dicas';

@Component({
  selector: 'app-dicas',
  standalone: true,
  imports: [],
  templateUrl: './dicas.component.html',
  styleUrl: './dicas.component.css'
})
export class DicasComponent {

  public arrayDicas = signal<Dicas[]>([
    {
      src: './assets/dicas/pencil.svg',
      alt: '',
      title: '1 - Escolha um nome de domínio cativante: Use o nome da sua empresa.',
      desc: 'Um ótimo nome de domínio para qualquer site deve incluir o nome do seu negócio ou as palavras-chave do seu nicho de mercado. Assim, você ajuda a sua marca a ter reconhecimento e aumenta o tráfego dos seus sites.'
    },
    {
      src: './assets/dicas/trophy.svg',
      alt: '',
      title: '2 - Crie Conteúdo de Qualidade Regularmente: Alimente a mente dos seus clientes.',
      desc: 'O conteúdo é rei na internet. Mantenha seus clientes engajados e interessados ​​criando e compartilhando regularmente conteúdo relevante e valioso. Isso não só ajuda a estabelecer sua autoridade no seu nicho, mas também mantém seu público retornando para mais.'
    },
    {
      src: './assets/dicas/gears.svg',
      alt: '',
      title: '3 - Otimize para os Motores de Busca: Conquiste o topo do ranking.',
      desc: 'Utilize técnicas de otimização de mecanismos de busca (SEO) para garantir que seu site seja encontrado facilmente pelos motores de busca. Isso aumentará sua visibilidade online e direcionará mais tráfego qualificado para o seu negócio.'
    },
    {
      src: './assets/dicas/money.svg',
      alt: '',
      title: '4 - Invista em Marketing de Conteúdo: Atraia, envolva e converta.',
      desc: 'O marketing de conteúdo é uma estratégia poderosa para atrair, envolver e converter clientes. Crie blogs, vídeos, infográficos e outros tipos de conteúdo relevantes para o seu público-alvo, e promova-os em seus canais de marketing para gerar leads e aumentar as vendas.'
    },
    {
      src: './assets/dicas/trowel.svg',
      alt: '',
      title: '5 - Construa uma Comunidade Engajada: Crie conexões significativas.',
      desc: 'Cultive uma comunidade em torno da sua marca, onde os clientes possam se conectar, compartilhar experiências e fornecer feedback. Isso não só fortalece o relacionamento com os clientes, mas também cria defensores da marca que ajudarão a promover seus produtos ou serviços.'
    },
    {
      src: './assets/dicas/magnifying.svg',
      alt: '',
      title: '6 - Analise e Ajuste Constantemente: Melhore continuamente.',
      desc: 'A análise de dados é fundamental para o sucesso online. Monitore regularmente o desempenho do seu site, campanhas de marketing e interações do cliente. Com base nesses insights, faça ajustes e melhorias contínuas para otimizar suas estratégias e maximizar os resultados.'
    },
  ])

}
