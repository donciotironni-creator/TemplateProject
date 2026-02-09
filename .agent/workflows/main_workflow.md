# Multi-Agent Workflow: Feature Implementation

Acest workflow descrie modul în care agenții colaborează pentru a livra un feature nou (ex: "Modul Management Clienți").

## 1. Discovery Phase
- **Cine**: `Skill_Product_UX`
- **Output**: User Stories, Mockup-uri conceptuale.

## 2. DB Design
- **Cine**: `Skill_SQL_Architect` + `SubAgent_DB_Migrations`
- **Input**: User Stories.
- **Output**: Mermaid ERD, SQL Scripts, EF Migrations.

## 3. API Contract & Implementation
- **Cine**: `Skill_Backend_Engineer` + `SubAgent_API_Contract` + `SubAgent_Auth_RBAC`
- **Input**: DB Schema.
- **Output**: Endpoints .NET, Swagger Docs, DTOs.

## 4. UI Implementation
- **Cine**: `Skill_Frontend_Engineer` + `SubAgent_UI_Scaffold`
- **Input**: API Contract, Design requirements.
- **Output**: Pagini Next.js, Componente shadcn, Integrare API.

## 5. Quality & Security
- **Cine**: `Skill_QA_Testing` + `Skill_Security_Reviewer`
- **Input**: Full source code.
- **Output**: Test Reports, Security Audit results.

## 6. Release
- **Cine**: `Skill_DevOps_CI` + `SubAgent_Release_Manager`
- **Input**: Tested code.
- **Output**: GitHub Release, Docker images, Deployment status.

---
**Regulă Generală**: Orice agent se oprește (`STOP & ASK`) dacă input-ul de la etapa anterioară lipsește sau este ambiguu.
