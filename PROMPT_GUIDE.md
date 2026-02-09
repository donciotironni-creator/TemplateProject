# Prompt Guide: Cum să lucrezi cu Antigravity ca un "Principal Architect"

Acest ghid îți arată cum să folosești structura de Skill-uri și Sub-agenți pe care am construit-o pentru a obține rezultate de înaltă calitate, predictibile și profesioniste.

## 1. Structura unui "Power Prompt"

Pentru a activa corect agenții, promptul tău ar trebui să includă:
- **CONTEXT**: Ce vrei să construiești.
- **SKILL**: Menționează explicit ce skill/expert vrei să folosească (ex: `Skill_SQL_Architect`).
- **INPUTS**: Oferă datele necesare (business requirements, schema, etc.).
- **STEPS/RULES**: Amintește-i să respecte regulile din fișierul de skill.

### Exemplu de Prompt (Implementare Modul nou):
> "Vreau să adăugăm un modul de **Management Clienți**. 
> 1. Folosește `Skill_SQL_Architect` pentru a crea schema (tabelele `customers`, `addresses`, `contacts`). Avem nevoie de soft-delete și track-ing pentru cine a creat înregistrarea.
> 2. Folosește `SubAgent_DB_Migrations` pentru a pregăti migrarea EF Core.
> 3. Folosește `Skill_Backend_Engineer` pentru a genera CRUD-ul în .NET, respectând arhitectura existentă.
> 4. Folosește `Skill_Frontend_Engineer` pentru a crea un Dashboard Table cu filtru de căutare folosind shadcn/ui.
> Respectă toate regulile de naming și securitate (RBAC) definite în `.agent/skills/`."

---

## 2. Când să folosești fiecare Skill

| Skill / Sub-agent | Când îl folosești? |
| :--- | :--- |
| **Skill_SQL_Architect** | Când vrei să schimbi structura bazei de date sau să optimizezi query-uri. |
| **Skill_Backend_Engineer** | Când ai nevoie de controllere noi, servicii complexe sau integrare cu API-uri externe. |
| **Skill_Frontend_Engineer** | Când vrei elemente noi de UI, animații sau logică în client (React). |
| **SubAgent_Auth_RBAC** | Când vrei să protejezi un endpoint sau să adaugi un rol nou (ex: "Manager"). |
| **SubAgent_UI_Scaffold** | Când vrei să "desenezi" rapid un formular complex sau un dashboard. |

## 3. Tips & Tricks
- **Invocă Workflow-ul**: Poți spune "Urmează `main_workflow.md` pentru implementarea feature-ului X".
- **Verifică DoD**: La finalul fiecărui task, cere-i: "Verifică implementarea față de `DEFINITION_OF_DONE.md`".
- **Zero Placeholder**: Insistă pe implementări complete. Skill-urile sunt antrenate să nu lase `// TODO` în cod.
