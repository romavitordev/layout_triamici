# TODO — layout_triamici (frontend)

> Última sincronização com TriAmici: 2026-05-31

- [x] Garantir que `AudioPlayer` trate erro quando áudio ausente (onError → não renderiza)
- [x] Executar `npm run build`, `npm run lint`, `npm run typecheck` e corrigir problemas
  - build (static export) OK · lint OK (corrigido `react/no-unescaped-entities` em Depoimentos) · typecheck OK
- [x] Adicionar `.eslintrc.json` (`next/core-web-vitals`) e script `typecheck`
- [x] Manter equivalência de código com `TriAmici/frontend` (divergência intencional apenas em `next.config.js`: `output: export` + `basePath: /layout_triamici`, e nos prefixos de mídia)
- [~] Verificar responsividade nas principais breakpoints (QA visual em dispositivos reais — pendente)
- [ ] Sincronizar mídias de `TriAmici/frontend/public/midias` (`jingle-triamici.mp3` ainda ausente — fornecido pelo cliente)
- [x] README com instruções de uso local e deploy (GitHub Pages)

---

Este repositório é o **frontend isolado** publicado em GitHub Pages
(workflow `.github/workflows/deploy.yml`, branch `main`). O repositório
principal e completo (frontend + backend + banco + deploy) é o **TriAmici**.

Operações recentes sincronizadas desde `TriAmici`:
- Tratamento de erro do AudioPlayer (`onError`).
- Correção de lint em `Depoimentos` (aspas tipográficas).
- Configuração de ESLint e script de `typecheck`.
