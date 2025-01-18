import { Component, Inject } from '@angular/core';
import { EcoleService } from '../ecole.service';
import { EcoleConduite } from '../../../model/ecole-conduite';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-liste-ecole',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './liste-ecole.component.html',
  styleUrl: './liste-ecole.component.css'
})
export class ListeEcoleComponent {
  autoecoles: EcoleConduite[] = [];
  errorMessage: string | null = null;

  constructor(private ecoleService: EcoleService) {}

  ngOnInit(): void {
    this.ecoleService.getAutoEcoles().subscribe({
      next: (data) => {
        this.autoecoles = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des auto-écoles :', error);
        this.errorMessage = 'Impossible de récupérer les données. Veuillez réessayer plus tard.';
      }
    });
  }
}
