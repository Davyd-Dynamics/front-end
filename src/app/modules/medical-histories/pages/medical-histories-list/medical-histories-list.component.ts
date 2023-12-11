import { Component } from '@angular/core';
import {MedicalHistoriesService} from "../../../../@core/services/medical-histories.service";
import {Router} from "@angular/router";
import {MedicalHistory} from "../../../../models";

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

  constructor(private medicalHistoryService: MedicalHistoriesService, private router: Router) {}

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

  openMedicalHistoryDetails(historyId: string): void {
    this.router.navigate(['medical-histories', historyId]);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadMedicalHistories();
  }
}
