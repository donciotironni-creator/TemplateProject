# New Project Guide: Din Template la Producție

Pentru a începe un proiect nou folosind acest stack, urmează acești pași pentru a-ți configura mediul rapid și eficient.

## 1. Clonarea și Curățarea
În loc să lucrezi direct în folderul de template, creează o copie curată:

```bash
# 1. Clonează template-ul într-un folder nou
git clone https://github.com/donciotironni-creator/TemplateProject.git my-new-app
cd my-new-app

# 2. Șterge istoricul git al template-ului și începe unul nou
rm -rf .git # Pe Windows: rmdir /s /q .git
git init
```

## 2. Personalizarea Naming-ului
Template-ul folosește namespace-ul `MyApp`. Poți să-l schimbi rapid:
- Rulează un "Search & Replace" în tot proiectul: `MyApp` -> `NumeleTauDeProiect`.
- Redenumește fișierele `.sln` și `.csproj` manual sau cere-mi ajutorul: **"Antigravity, redenumește tot proiectul din MyApp în [NumeleTau]"**.

## 3. Configurarea Mediului
Creează fișierul `.env` din template:
```bash
cp .env.example .env
```
Ajustează credențialele de bază de date dacă este necesar.

## 4. Pornirea Infrastructurii
Folosește Docker pentru a porni baza de date PostgreSQL instant:
```bash
docker-compose -f infra/docker-compose.yml up db -d
```

## 5. Cum lucrezi cu Antigravity (Agentic Workflow)
Acesta este cel mai mare avantaj al acestui template. Nu scrie cod de mână pentru funcționalități standard. 

### Pasul A: Definește Feature-ul
Spune-mi ce vrei să construiești.
> "Vreau să adăugăm un modul de **Gestionare Inventar**."

### Pasul B: Invocă Skill-urile
Folosește ghidul din `PROMPT_GUIDE.md`. Poți să-mi dai instrucțiuni de tipul:
> "Urmează `main_workflow.md` pentru Feature-ul de Inventar. 
> 1. Folosește `Skill_SQL_Architect` pentru tabele.
> 2. Folosește `Skill_Backend_Engineer` pentru API.
> 3. Folosește `Skill_Frontend_Engineer` pentru UI (Dashboard table)."

### Pasul C: Verifică DoD
După ce termin, cere-mi să verific dacă totul e gata:
> "Verifică dacă noul modul respectă `DEFINITION_OF_DONE.md`."

## 6. Deployment
Când ești gata de producție:
- Updatează `ci.yml` cu secretele tale de GitHub.
- Dockerfile-urile sunt deja optimizate (multi-stage) pentru performanță maximă.

---

**Sfat de Architect:** Începe întotdeauna prin a defini schema bazei de date. O bază solidă de date face ca restul codului (API și UI) să fie generat aproape perfect de către agenți.
