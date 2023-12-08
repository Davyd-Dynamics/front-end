import { Component, OnInit } from '@angular/core';
import { EmergencyRequest } from '../../../../models/emergency-request';
import { Router } from '@angular/router';
import {EmergencyRequestsService} from "../../../../@core/services/emergency-requests.service";

@Component({
  selector: 'app-emergency-request-list',
  templateUrl: './emergency-requests-list.component.html',
})
export class EmergencyRequestListComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'patientId', 'location', 'status', 'type'];
  public emergencyRequests: EmergencyRequest[] = [];
  public totalRecords: number = this.emergencyRequests.length;
  public pageSize = 10;
  public currentPage = 1;

  constructor(private emergencyRequestService: EmergencyRequestsService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmergencyRequests();
  }

  loadEmergencyRequests(): void {
    this.emergencyRequestService.getAll(this.currentPage, this.pageSize).subscribe(
      (requests: EmergencyRequest[]) => {
        this.emergencyRequests = requests;
        this.totalRecords = requests.length;
      }
    );
  }

  openEmergencyRequestDetails(requestId: string): void {
    this.router.navigate(['emergency-requests', requestId]);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadEmergencyRequests();
  }
}
