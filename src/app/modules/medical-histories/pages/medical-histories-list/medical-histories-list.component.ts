import { Component } from '@angular/core';
import {MedicalHistoriesService} from "../../../../@core/services/medical-histories.service";
import {Router} from "@angular/router";
import {MedicalHistory} from "../../../../models";
import {
  ConfirmDeleteModalComponent
} from "../../../../@shared/components/confirm-delete-modal/confirm-delete-modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-medical-histories-list',
  templateUrl: './medical-histories-list.component.html',
  styleUrls: ['./medical-histories-list.component.scss']
})
export class MedicalHistoriesListComponent {
  public displayedColumns: string[] = ['id', 'patient.name', 'disease', 'treatment'];
  public medicalHistories: MedicalHistory[] = [];
  public totalRecords: number = this.medicalHistories.length;
  public pageSize = 10;
  public currentPage = 1;

  constructor(private medicalHistoryService: MedicalHistoriesService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadMedicalHistories();
  }

  loadMedicalHistories(): void {
    this.medicalHistoryService.getAll(this.currentPage, this.pageSize).subscribe(
      (histories: MedicalHistory[]) => {
        this.medicalHistories = histories;
        console.log(histories)
        this.totalRecords = histories.length;
      }
    );
  }

  public deleteMedicalHistoryConfirmation(patientId: string): void {
    const dialogRef = this.dialog.open(ConfirmDeleteModalComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Якщо користувач підтвердив видалення, виконайте логіку видалення
        this.deleteMedicalHistory(patientId);
      }
    });
  }

  openMedicalHistoryDetails(historyId: string): void {
    this.router.navigate(['medical-histories', historyId]);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadMedicalHistories();
  }

  editMedicalHistory(medicalHistoryId: string) {
    this.router.navigate(['medical-histories', medicalHistoryId, 'edit']);
  }

  private deleteMedicalHistory(medicalHistoryId: string): void {
    this.medicalHistoryService.delete(medicalHistoryId).subscribe(
      () => {
        this.loadMedicalHistories();
      }
    );
  }
}
