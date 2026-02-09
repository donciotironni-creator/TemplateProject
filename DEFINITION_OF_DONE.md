# Definition of Done (DoD)

Fiecare feature sau componentă nouă trebuie să îndeplinească următoarele criterii înainte de a fi considerată "Done":

## 1. Code Quality
- [ ] Codul respectă linting & formatting (ESLint/Prettier, dotnet format).
- [ ] Nu există cod duplicat semnificativ.
- [ ] Naming-ul este consistent cu convențiile monorepo-ului.

## 2. Functionality
- [ ] Feature-ul funcționează conform cerințelor (Happy Path testat manual).
- [ ] Cazurile de eroare sunt tratate (400, 404, 500).
- [ ] Validarea datelor este prezentă atât pe Frontend cât și pe Backend.

## 3. Testing
- [ ] Testele unitare acoperă logica de business nouă.
- [ ] Testele de integrare (dacă e cazul) trec cu succes.

## 4. Documentation & Contract
- [ ] Specificația OpenAPI (Swagger) este actualizată.
- [ ] README-ul este actualizat dacă s-au adăugat variabile de mediu noi.
- [ ] Tipurile TypeScript sunt generate/actualizate pentru Frontend.

## 5. Security & Auth
- [ ] Accesul este protejat de auth guard dacă feature-ul nu este public.
- [ ] Rolurile (RBAC) sunt verificate pe API.
- [ ] Nu s-au introdus secrete hardcoded.

## 6. Performance & UX
- [ ] Timpul de răspuns al API-ului este sub 200ms pentru operații simple.
- [ ] UI-ul este responsiv și are feedback vizual (loaders, toasty notifications).
