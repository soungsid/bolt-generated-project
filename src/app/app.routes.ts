import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'list-quiz', loadComponent: () => import('./components/list-quiz/list-quiz.component').then(mod => mod.ListQuizComponent)},
    {path: 'quiz/:id', loadComponent: () => import('./components/quiz/quiz.component').then(mod => mod.QuizComponent)},
    {path: 'test-de-connaissances-saaq', loadComponent: () => import('./components/test-saaq/test-saaq.component').then(mod => mod.TestSaaqComponent)},
    {path: 'trouver-une-ecole', loadComponent: () => import('./components/auto-ecoles/liste-ecole/liste-ecole.component').then(mod => mod.ListeEcoleComponent), 
        children: [
            { path: ':slug', loadComponent: () => import('./components/auto-ecoles/ecole-detail/ecole-detail.component').then(mod => mod.EcoleDetailComponent),  }, // Détails d'une école
            { path: '', redirectTo: '/trouver-une-ecole/default', pathMatch: 'full' }, // Valeur par défaut
          ]
    }

];
