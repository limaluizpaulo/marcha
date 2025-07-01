# 👕 Camisetas da Marcha – Template Universal

Este é o template universal para sites de venda de camisetas das **Marchas da Maconha pelo Brasil**.

Criamos esse projeto com o objetivo de:
- Fortalecer financeiramente as organizações locais das Marchas
- Facilitar a criação de sites profissionais para qualquer cidade
- Padronizar a experiência de compra via Pix e WhatsApp
- Inspirar e conectar Marchas pelo Brasil

> "Vista a luta. Apoie a Marcha. Fortaleça a quebrada."

---

## ✨ O que tem no site

- **Página inicial** com banner e chamada direta
- **Catálogo de produtos** com fotos, tamanhos e valores personalizáveis
- **Sistema de pagamento** via Pix com cópia automática da chave
- **Integração WhatsApp** para envio direto de comprovantes
- **Seção sobre o movimento** totalmente customizável
- **Layout responsivo** e visual de cultura urbana
- **Configuração centralizada** em arquivo JSON único

---

## 🚀 Como adaptar para sua cidade

### 1. Clone o repositório

```bash
git clone https://github.com/limaluizpaulo/marcha.git
cd marcha
npm install
```

### 2. Edite o arquivo de configuração

Abra o arquivo `config/site-config.json` e personalize:

#### 📍 Informações da cidade
```json
"site": {
  "name": "Camisetas da Marcha - SuaCidade",
  "description": "Sua descrição personalizada aqui",
  "city": "SuaCidade", 
  "year": "2025",
  "deliveryInfo": "Entregas em SuaCidade (ou retirada na Marcha!)"
}
```

#### 📱 Contatos
```json
"contact": {
  "whatsappNumber": "5511999999999", // Número com código do país
  "instagramProfile": "marchasuacidade",
  "pixKey": "seuemail@provedor.com"
}
```

#### 💬 Mensagens do WhatsApp
```json
"whatsappMessages": {
  "hero": "👕 Olá! Vi as camisetas no site e quero fortalecer a Marcha SuaCidade!",
  "pix": "✅ Olá! Fiz o PIX e gostaria de enviar o comprovante para garantir minha camiseta!",
  "participate": "Olá! Quero saber mais sobre a Marcha da Maconha SuaCidade e como posso participar!"
}
```

#### 🖼️ Imagens
```json
"images": {
  "logo": "/logo-suacidade.png",
  "heroBanner": "/banner-camisetas.png", 
  "aboutImage": "/marcha-suacidade-2024.jpg"
}
```

#### 👕 Produtos
```json
"products": {
  "defaultPrice": "50", // Preço padrão
  "currency": "R$",
  "availableSizes": ["P", "M", "G", "GG"], // Tamanhos disponíveis
  "items": [
    {
      "id": "modelo-1",
      "title": "🖤 Modelo 1", 
      "image": "/modelo-1.png",
      "alt": "Descrição da imagem",
      "whatsappMessage": "Olá! Quero a camiseta Modelo 1 da Marcha SuaCidade.",
      "price": "50"
    }
    // Adicione mais produtos aqui
  ]
}
```

#### 📝 Textos sobre o movimento
```json
"content": {
  "aboutText": [
    "Primeiro parágrafo sobre sua Marcha...",
    "Segundo parágrafo...",
    "Continue escrevendo sua história..."
  ],
  "howToBuySteps": [
    "Passo 1 personalizado",
    "Passo 2 personalizado", 
    "Passo 3 personalizado",
    "Passo 4 personalizado"
  ]
}
```

### 3. Substitua as imagens

Coloque suas imagens na pasta `public/`:

- **Logo**: `/logo-suacidade.png`
- **Banner principal**: `/banner-camisetas.png` 
- **Foto sobre o movimento**: `/marcha-suacidade-2024.jpg`
- **Modelos de camisetas**: `/modelo-1.png`, `/modelo-2.png`, etc.

#### 📐 Tamanhos recomendados:
- **Logo**: 300x120px (PNG transparente)
- **Banner**: 1400x400px 
- **Foto do movimento**: 800x500px
- **Camisetas**: 400x400px (fundo transparente)

### 4. Teste localmente

```bash
npm run dev
```

Acesse `http://localhost:3000` para ver as mudanças.

### 5. Publique online

#### Opção 1: Vercel (Recomendado)
1. Faça um fork deste repositório
2. Conecte sua conta do GitHub no [Vercel](https://vercel.com)
3. Importe o projeto
4. Publique automaticamente

---

## 🎨 Personalização avançada

### Cores do tema
As cores estão definidas no `tailwind.config.ts`:
- `verde-detalhe`: Cor principal verde
- `preto-asfalto`: Fundo escuro
- `branco-giz`: Texto claro

### Fontes
- **Oswald**: Títulos e elementos destacados
- **VT323**: Elementos com estilo digital/retro

### Modificações no código
Se precisar modificar algo além das configurações, os principais arquivos são:
- `app/page.tsx`: Página principal
- `app/globals.css`: Estilos globais
- `tailwind.config.ts`: Configuração de cores e fontes

---

## 🤝 Para outras Marchas

### Suporte da comunidade
Se precisar de ajuda para adaptar:
- Abra uma [Issue](https://github.com/limaluizpaulo/marcha/issues) no GitHub
- Entre em contato via Instagram: [@marchadamaconhagru](https://instagram.com/marchadamaconhagru)


### Contribuições
Quer melhorar o template? 
- Faça um fork
- Crie uma branch com sua feature
- Abra um Pull Request

---

## 🚀 Tecnologias

- **Next.js 14**: Framework React moderno
- **Tailwind CSS**: Estilização utility-first
- **TypeScript**: Tipagem estática
- **Embla Carousel**: Carrossel responsivo
- **Lucide Icons**: Ícones modernos

---

## ✊ Licença

Este projeto é **livre e comunitário**. Use, copie, adapte, remixe.  

**Única condição**: Mantenha o espírito da Marcha - horizontal, antiproibicionista e popular.

---

## 📋 Checklist de implementação

- [ ] Editei o arquivo `config/site-config.json`
- [ ] Substitui todas as imagens na pasta `public/`
- [ ] Testei localmente com `npm run dev`
- [ ] Configurei o repositório no GitHub
- [ ] Publiquei no Vercel/Netlify
- [ ] Testei os links do WhatsApp
- [ ] Testei a cópia da chave Pix
- [ ] Compartilhei nas redes sociais

---

Feito com amor, revolta e erva 💚  
**Template criado pela [Marcha da Maconha Guarulhos](https://instagram.com/marchadamaconhagru)**

*Fortaleça sua Marcha local. Conecte-se com o movimento nacional. Lute por um futuro mais justo e verde.*
