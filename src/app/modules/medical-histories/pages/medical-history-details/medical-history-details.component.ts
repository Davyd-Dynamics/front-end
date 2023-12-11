import { Component } from '@angular/core';
import {MedicalHistory} from "../../../../models";
import {ActivatedRoute} from "@angular/router";
import {MedicalHistoriesService} from "../../../../@core/services/medical-histories.service";

@Component({
  selector: 'app-medical-history-details',
  templateUrl: './medical-history-details.component.html',
  styleUrls: ['./medical-history-details.component.scss']
})
export class MedicalHistoryDetailsComponent {
  medicalHistory: MedicalHistory | undefined;

  constructor(
    private route: ActivatedRoute,
    private medicalHistoriesService: MedicalHistoriesService
  ) {}

  ngOnInit(): void {
    this.loadMedicalHistory();
  }

  loadMedicalHistory(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.medicalHistoriesService.getById(id).subscribe(
        (history: MedicalHistory) => {
          this.medicalHistory = history;
        },
        error => {
          // Handle error, e.g., show a message or redirect to an error page
        }
      );
    }
  }
}
