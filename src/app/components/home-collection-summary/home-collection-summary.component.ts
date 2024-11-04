import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home-collection-summary',
  templateUrl: './home-collection-summary.component.html',
  styleUrl: './home-collection-summary.component.scss',
  providers: [MessageService],
})
export class HomeCollectionSummaryComponent {
  @Input() data: any = null;
  @Output() action = new EventEmitter<string>();
  homeCollectionData: any;
  patientDetail: any;
  testCalculationDetail: any;
  testsSelected: any;
  constructor(private messageService: MessageService) {}
  ngOnInit() {
    console.log(this.data);
    const {
      homeCollectionData,
      patientDetail,
      testCalculationDetail,
      testsSelected,
    } = this.data;
    this.homeCollectionData = homeCollectionData;
    this.patientDetail = patientDetail;
    this.testCalculationDetail = testCalculationDetail;
    this.testsSelected = testsSelected;
  }
  openForm() {
    this.action.emit('back');
  }
  submitTest() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Submitting your request',
    });
    setTimeout(() => {
      this.messageService.add({
        severity: 'info',
        summary: 'Info',
        detail: 'Processing your payment',
      });
    }, 3000);
    setTimeout(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Test request submitted ',
      });
    }, 6000);
  }
}
