# Tri Amici Photography Academy (Layout)

Frontend isolado do site institucional da Tri Amici Photography Academy — Sorocaba, SP.

## Stack
- **Frontend:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, Swiper

## Desenvolvimento local (frontend)

### Requisitos
- Node.js 20+

### 1. Clonar e instalar
```bash
git clone https://github.com/romavitordev/layout_triamici.git
cd layout_triamici
npm install
```

### 2. Configurar variáveis de ambiente
Crie `frontend/.env.local` (ou `.env.local` na raiz do repositório) com:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### 3. Rodar frontend
```bash
npm run dev
```
# Disponível em: http://localhost:3000

---

## Mídias
Todos os arquivos de mídia ficam em `public/midias/` e são servidos em `/midias/...`.
Arquivos esperados:
- `video_bg.mp4` — vídeo de fundo da home
- `jingle-triamici.mp3` — jingle da escola (fornecido pelo cliente)

---

## Build / Lint / Typecheck
```bash
npm run build
npm run lint
npm run typecheck
```

---

Se quiser que eu sincronize outras mudanças do monorepo `TriAmici` para cá (mídias, componentes ou ajustes), me avise.
