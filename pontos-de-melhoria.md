# Pontos de Melhoria - Site Bruno Teles

## Problemas Identificados

### 1. Modo Noturno
- O modo noturno atual não possui contraste adequado para legibilidade
- As cores de fundo e texto não seguem as diretrizes WCAG AA no modo escuro
- Transição entre modo claro e escuro pode ser melhorada

### 2. Bug no Título H1
- O texto do título principal (h1) na seção hero apresenta problemas de legibilidade
- Possível sobreposição ou problema de z-index com outros elementos
- Necessário ajustar tamanho, espaçamento e contraste

### 3. Layout e Experiência Geral
- Melhorar espaçamento entre seções para melhor respiro visual
- Aprimorar contraste entre elementos de texto e fundo
- Adicionar mais microinterações para melhorar engajamento
- Revisar responsividade em dispositivos móveis menores

### 4. Acessibilidade
- Melhorar navegação por teclado
- Adicionar mais atributos ARIA para leitores de tela
- Garantir que todos os elementos interativos tenham foco visível
- Revisar contraste de cores em todos os elementos

### 5. Performance
- Otimizar carregamento de imagens com lazy loading mais eficiente
- Minificar arquivos CSS e JavaScript
- Implementar estratégia de carregamento crítico para CSS

### 6. SEO
- Revisar e otimizar meta tags
- Melhorar estrutura de cabeçalhos (h1, h2, h3)
- Adicionar mais dados estruturados (schema.org)

## Melhorias Propostas

### Modo Noturno
- Redesenhar paleta de cores do modo escuro para garantir contraste WCAG AA
- Implementar transição suave entre modos
- Adicionar preferência de usuário salva em localStorage

### Correção do H1
- Ajustar z-index e posicionamento
- Revisar tamanho e peso da fonte
- Garantir contraste adequado com o fundo

### Layout e UX
- Adicionar mais espaço entre seções
- Melhorar hierarquia visual
- Implementar animações sutis de scroll
- Revisar grid para melhor alinhamento

### Acessibilidade e SEO
- Implementar skip links mais visíveis
- Adicionar mais landmarks ARIA
- Revisar estrutura de cabeçalhos
- Otimizar alt text em imagens

### Performance
- Converter imagens para WebP
- Implementar carregamento progressivo
- Otimizar CSS e JS
