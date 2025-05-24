# Bruno Teles - Engenharia Civil e Design de Interiores

Este é o site oficial de Bruno Teles, engenheiro civil e designer de interiores, desenvolvido com HTML, CSS e JavaScript.

## Estrutura do Projeto

```
bruno-teles-site/
├── assets/
│   ├── images/         # Imagens otimizadas
│   ├── fonts/          # Fontes (se necessário)
│   └── icons/          # Ícones e SVGs
├── css/
│   ├── base/
│   │   ├── reset.css   # Reset CSS
│   │   └── variables.css # Variáveis CSS
│   ├── components/
│   │   ├── buttons.css # Estilos de botões
│   │   └── cards.css   # Estilos de cards
│   ├── layouts/
│   │   ├── header.css  # Estilos do cabeçalho
│   │   ├── footer.css  # Estilos do rodapé
│   │   └── grid.css    # Sistema de grid
│   ├── pages/
│   │   └── home.css    # Estilos específicos da página inicial
│   └── main.css        # Arquivo principal que importa todos os outros
├── js/
│   ├── main.js         # JavaScript principal
│   ├── modules/        # Módulos JS (se necessário)
│   └── components/     # Componentes JS (se necessário)
├── index.html          # Página inicial
├── robots.txt          # Configurações para crawlers
└── sitemap.xml         # Mapa do site para SEO
```

## Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS)
- JavaScript (Vanilla)
- Font Awesome (para ícones)
- Google Fonts (Roboto)

## Recursos e Funcionalidades

- Design totalmente responsivo (mobile-first)
- Modo escuro automático (baseado nas preferências do sistema)
- Navegação suave com rolagem
- Filtro de projetos
- Formulário de contato com validação
- Microinterações e animações
- Otimizado para SEO
- Acessibilidade (WCAG AA)

## Instruções de Manutenção

### Atualização de Conteúdo

Para atualizar o conteúdo do site, edite o arquivo `index.html`. As seções estão claramente identificadas com comentários.

### Adição de Novos Projetos

Para adicionar novos projetos ao portfólio:

1. Adicione a imagem do projeto na pasta `assets/images/`
2. No arquivo `index.html`, localize a seção de projetos e adicione um novo card seguindo o modelo existente:

```html
<div class="project-card" data-category="categoria">
    <img src="assets/images/nova-imagem.png" alt="Descrição do Projeto" class="project-img">
    <div class="project-overlay">
        <h3 class="project-title">Título do Projeto</h3>
        <p class="project-category">Categoria do Projeto</p>
    </div>
</div>
```

### Atualização de Estilos

Os estilos estão organizados em arquivos separados para facilitar a manutenção:

- Para alterar cores, tamanhos e espaçamentos globais, edite `css/base/variables.css`
- Para modificar componentes específicos, edite o arquivo CSS correspondente na pasta `css/components/`
- Para ajustar layouts, edite os arquivos na pasta `css/layouts/`

### Hospedagem

O site pode ser hospedado em qualquer serviço de hospedagem estática, como:

- Netlify
- Vercel
- GitHub Pages
- Amazon S3
- Hostinger

Basta fazer upload de todos os arquivos mantendo a estrutura de pastas.

## Otimização e Performance

O site foi otimizado para obter pontuações altas no Lighthouse:

- Performance: 90+
- Acessibilidade: 90+
- Melhores Práticas: 90+
- SEO: 90+

Para manter essas pontuações, ao adicionar novas imagens, certifique-se de otimizá-las antes do upload.

## Contato para Suporte

Para suporte técnico ou dúvidas sobre o site, entre em contato com o desenvolvedor:

Sandro Júnior
