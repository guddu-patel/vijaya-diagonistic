import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-home-collection-summary',
  templateUrl: './home-collection-summary.component.html',
  styleUrl: './home-collection-summary.component.scss',
  providers: [MessageService],
})
export class HomeCollectionSummaryComponent {
  @ViewChild('openModal') openModalBtn = {} as ElementRef;
  @ViewChild('closeModal') closeModalBtn = {} as ElementRef;
  @Input() data: any = null;
  @Output() action = new EventEmitter<string>();
  homeCollectionData: any;
  patientDetail: any;
  testCalculationDetail: any;
  testsSelected: any;
  selectedPaymentMode = '';
  paymentDoneStatus = false;
  paymentMSg: any = null;
  testReqSent = false;
  allPaymentMessage: any = [];
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
      detail: 'Your booking has been confirmed and send to phlebologist.',
    });
    this.testReqSent = true;
    this.paymentMSg = null;
    this.allPaymentMessage = [];
    // setTimeout(() => {
    //   this.messageService.add({
    //     severity: 'info',
    //     summary: 'Info',
    //     detail: 'Processing your payment',
    //   });
    // }, 3000);
    // setTimeout(() => {
    //   this.messageService.add({
    //     severity: 'success',
    //     summary: 'Success',
    //     detail: 'Test request submitted ',
    //   });
    // }, 6000);
  }
  paymentLinkSend() {
    this.paymentDoneStatus = false;

    this.paymentMSg = 'Generating payment link';
    setTimeout(() => {
      this.allPaymentMessage.push('Payment Link Generated');
      this.paymentMSg = 'Payment Link has been sent successfully';
    }, 2000);
    setTimeout(() => {
      this.allPaymentMessage.push('Payment Link Send');
      this.paymentMSg = 'Please wait while your payment has been processed';
    }, 4000);
    setTimeout(() => {
      this.paymentMSg = 'Payment captured Successfully';
    }, 10000);
    setTimeout(() => {
      this.allPaymentMessage.push('Payment Captured');
      this.paymentDoneStatus = true;
    }, 11000);
    setTimeout(() => {
      this.closeModal();
    }, 13000);
  }
  openModal() {
    this.openModalBtn.nativeElement.click();
  }
  closeModal() {
    this.closeModalBtn.nativeElement.click();
  }
  paymentModeChange() {
    if (this.selectedPaymentMode === 'paymentlink') {
      this.openModal();
      this.paymentLinkSend();
    }
  }
}
