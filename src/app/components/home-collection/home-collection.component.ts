import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-home-collection',
  templateUrl: './home-collection.component.html',
  styleUrl: './home-collection.component.scss',
})
export class HomeCollectionComponent implements AfterViewInit {
  @ViewChild('addressModalBtnOpen', { static: false })
  openAddModal!: ElementRef;
  FormMode = true;
  todayDate = new Date();

  doctorList = [
    { id: 1, name: 'Dr. SK patel' },
    { id: 2, name: 'Dr. Anjit misra' },
    { id: 3, name: 'Dr. Rajan chaudhary' },
    { id: 4, name: 'Dr. Sagar kurmi' },
    { id: 5, name: 'Dr. Arun kumar jha' },
    { id: 5, name: 'Dr. Self' },
  ];
  clientList = [
    { id: 1, name: ' Mandhyal Home collection' },
    { id: 2, name: 'Vijaya helth camp_kol' },
    { id: 3, name: 'NIjamabad home collection' },
    { id: 4, name: 'Central Bank of india' },
    { id: 5, name: 'NMDC linited' },
    { id: 5, name: 'Midhan' },
  ];
  leadSourceList = [
    { id: 1, name: 'Website' },
    { id: 2, name: 'Mobile App' },
    { id: 3, name: "Whats'app" },
    { id: 4, name: 'Facebook' },
    { id: 5, name: 'Instragram' },
    { id: 6, name: 'Just dial' },
    { id: 7, name: 'Google Bussuiness chat' },
    { id: 8, name: 'News paperinseitio' },
    { id: 9, name: 'Other' },
  ];
  deliveryAddressList = [
    {
      id: 1,
      type: 'home',
      shortName: 'Home',
      address1: '379/Akrishna nagar colony',
      address2: 'Secundrabadh HYD',
      landmark: 'main road delhi',
      pin: 500020,
      area: '',
      city: 'HY',
      state: 'Telangana',
    },
    {
      id: 2,
      type: 'other',
      shortName: 'Office',
      address1: '23 block road Delhi',
      address2: 'near hadi market opposit sbi bank block road branch',
      landmark: 'main road delhi',
      pin: 500076,
      area: '',
      city: 'Delhi',
      state: 'delhi',
    },
    {
      id: 3,
      type: 'other',
      shortName: 'Juhu beach',
      address1: '23 block road Delhi',
      address2: 'near hadi market opposit sbi bank block road branch',
      landmark: 'main road delhi',
      pin: 500076,
      area: '',
      city: 'Delhi',
      state: 'delhi',
    },
    {
      id: 4,
      type: 'office',
      shortName: 'Jublihills',
      address1: '23 block road Delhi',
      address2: 'near hadi market opposit sbi bank block road branch',
      landmark: 'main road delhi',
      pin: 500076,
      area: '',
      city: 'Delhi',
      state: 'delhi',
    },
    {
      id: 5,
      type: 'office',
      shortName: 'kornal place',
      address1: '23 block road Delhi',
      address2: 'near hadi market opposit sbi bank block road branch',
      landmark: 'main road delhi',
      pin: 500076,
      area: '',
      city: 'Delhi',
      state: 'delhi',
    },
    {
      id: 6,
      type: 'home',
      shortName: 'Infornt mumtaj hotel',
      address1: '23 block road Delhi',
      address2: 'near hadi market opposit sbi bank block road branch',
      landmark: 'main road delhi',
      pin: 500076,
      area: '',
      city: 'Delhi',
      state: 'delhi',
    },
    {
      id: 6,
      type: 'home',
      shortName: 'Add New',
      address1: '',
      address2: '',
      landmark: '',
      pin: '',
      area: '',
      city: '',
      state: '',
    },
  ];
  diagonasticCenterList = [{ id: 1, name: 'Vijaya diagonostic center' }];
  patientSourceList = [
    {
      id: 1,
      title: 'mrs.',
      firstName: 'Ranjeeta',
      lastName: 'Arora',
      fullName: 'Mrs. Ranjeeta Arora',
      lastVisitDate: null,
      ageYear: '22',
      ageMonth: '0',
      email: 'ranjeeta@example.com',
      alternateMobile: '987*****82',
      mobile: '9898989898',
      gender: 'female',
      belongTo: 'self',
      dob: '2002-06-06',
      address: {
        address1: '379/A, Krishna Nagar Colony',
        address2: 'Bholakpur, Sicundrabad,',
        citycode: 'HYD ',
        city: 'Hyderabad',
        state: 'Telangana',
        pin: '500020',
        type: 'home',
        landmark: '',
        area: '',
      },
      fullAddress:
        '379/A, Krishna Nagar Colony, Bholakpur, Sicundrabad, HYD Telangana, Hyderabad 500020',
    },
    {
      id: 2,
      title: 'mr.',
      firstName: 'Himanshu',
      lastName: 'Adhikari',
      fullName: 'Mr. Himanshu Adhikari',
      lastVisitDate: null,
      ageYear: '37',
      ageMonth: '0',
      email: 'himanshua@example.com',
      alternateMobile: '997*****21',
      mobile: '9898989897',
      gender: 'female',
      belongTo: 'self',
      dob: '1987-06-06',
      address: {
        address1: 'D 105, Jalvayu tower ',
        address2: 'Tankbund Road, Kavadiguda,Opp. sai baba temple, ',
        citycode: 'HYD ',
        city: 'Hyderabad',
        state: 'Telangana',
        pin: '500020',
        type: 'home',
        landmark: '',
        area: '',
      },
      fullAddress:
        'D 105, Jalvayu tower, Tankbund Road, Kavadiguda, Opp. sai baba temple, Hyderabad 500020',
    },
    {
      id: 3,
      title: 'mr.',
      firstName: 'Rishav',
      lastName: 'Mahajan',
      fullName: 'Mr. Rishav Mahajan',
      lastVisitDate: null,
      ageYear: '37',
      ageMonth: '0',
      email: 'rishav@example.com',
      alternateMobile: '997*****21',
      mobile: '9898989896',
      gender: 'male',
      belongTo: 'self',
      dob: '1979-06-06',
      address: {
        address1: '36 Road no. 04, Saifabad Road',
        address2: 'Opp. to Chroma Store ',
        citycode: 'HYD ',
        city: 'Hyderabad',
        state: 'Telangana',
        pin: '500020',
        type: 'home',
        landmark: '',
        area: '',
      },
      fullAddress:
        '36 Road no. 04, Saifabad Road, Opp. to Chroma Store, Hydrabad - 500020',
    },
    {
      id: 4,
      title: 'mrs.',
      firstName: 'rani',
      lastName: 'patel',
      lastVisitDate: null,
      ageYear: '22',
      ageMonth: '8',
      email: 'rani@gmail.com',
      alternateMobile: '1234123412',
      gender: 'female',
    },
    {
      id: 5,
      title: 'mrs.',
      firstName: 'apeksha',
      lastName: 'patel',
      lastVisitDate: null,
      ageYear: '25',
      ageMonth: '8',
      email: 'apeksha@gmail.com',
      alternateMobile: '1234123412',
      gender: 'female',
    },
    {
      id: 6,
      title: 'mr.',
      firstName: 'sagar',
      lastName: 'patel',
      lastVisitDate: null,
      ageYear: '23',
      ageMonth: '8',
      email: 'guddu@gmail.com',
      alternateMobile: '1234123412',
      gender: 'male',
    },
    {
      id: 7,
      title: 'mr.',
      firstName: 'niraj',
      lastName: 'patel',
      lastVisitDate: null,
      ageYear: '23',
      ageMonth: '8',
      email: 'guddu@gmail.com',
      alternateMobile: '1234123412',
      gender: 'male',
    },
    {
      id: 8,
      title: 'santosh',
      firstName: 'rama',
      lastName: 'patel',
      lastVisitDate: null,
      ageYear: '23',
      ageMonth: '8',
      email: 'guddu@gmail.com',
      alternateMobile: '1234123412',
      gender: 'male',
    },
    {
      id: 9,
      title: 'mrs.',
      firstName: 'raksha',
      lastName: 'patel',
      lastVisitDate: null,
      ageYear: '30',
      ageMonth: '8',
      email: 'raksha@gmail.com',
      alternateMobile: '8787282872',
      gender: 'female',
    },
  ];
  homeCollectionData: any = {
    selectedDoctor: null,
    selectedLead: null,
    isb2buser: 'false',
    selectedClient: null,
    selectedDeliveryAddress: null,
    selectedDiagonasticCenter: null,
    remarkRoute: null,
    selectedTest: null,
    selectedSlot: '',
    selectedPostSlot: '',
    selectedCollectionDate: new Date().toISOString().substring(0, 10),
    sameAsParmanentAdd: false,
  };

  availableTests = [
    {
      testName: 'CBC (Complete Blood Count)',
      price: 950,
      precausion: 'Over night fasting',
      type: 'fasting',
      group: 'sugar',
    },
    {
      testName: 'LFT (Liver Function test)',
      price: 1450,
      precausion:
        'Sample must be give after 2 hr. from the consumption of lunch',
      type: 'post',
      group: 'sugar',
    },
    {
      testName: 'Lipid Profile',
      price: 2450,
      precausion: 'Over night fasting',
      type: 'Normal',
      group: 'sugar',
    },
    {
      testName: 'Thyroid Profile Total( T3, T4 & TSH)',
      price: 2150,
      precausion: 'Over night fasting',
      type: 'Normal',
      group: 'sugar',
    },
    {
      testName: 'Diebetes Screening (HbA1C & Fasting Sugar)',
      price: 1850,
      precausion: 'Over night fasting',
      type: 'Normal',
      group: 'sugar',
    },
    {
      testName: 'COVID- RT PCR',
      price: 1350,
      precausion: 'Over night fasting',
      type: 'Normal',
      group: 'sugar',
    },
  ];
  testsSelected: any = [
    // {
    //   testName: 'Fasting Plasma glucose',
    //   price: 120,
    //   precausion: 'Over night fasting',
    //   type: 'fasting',
    //   group: 'sugar',
    // },
    // {
    //   testName: 'Post lunch glucose',
    //   price: 120,
    //   precausion:
    //     'Sample must be give after 2 hr. from the consumption of lunch',
    //   type: 'fasting',
    //   group: 'sugar',
    // },
    // { testName:'Fasting Plasma glucose', price:120,precausion:'Over night fasting',type:'fasting',group:'sugar'},
    // { testName:'Fasting Plasma glucose', price:120,precausion:'Over night fasting',type:'fasting',group:'sugar'}
  ];
  slotList = [
    '6:00 - 6:30',
    '6:30 - 7:00',
    '7:00 - 7:30',
    '7:30 - 8:00',
    '8:00 - 8:30',
    '8:30 - 9:00',
    '9:00 - 9:30',
    '9:30 - 10:00',
    '10:00 - 10:30',
    '10:30 - 11:00',
    '11:00 - 11:30',
    '11:30 - 12:00',
    '12:00 - 12:30',
    '12:30 - 13:00',
  ];
  selectedPatient: any;
  form: FormGroup;
  addressForm: FormGroup;
  submitted = false;
  showpatientList = false;
  patientDetail: any;
  submittedAdd = false;
  editAddMode = false;
  spotBookingenabled = false;
  slotError = false;
  testCalculationDetail = {
    totalPrice: 0,
    haveFastTest: false,
    havePostTest: false,
  };
  form1: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      fullName: [''],
      firstName: ['', Validators.required],
      lastName: [''],
      lastVisitDate: [''],
      ageYear: ['', Validators.required],
      ageMonth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: [
        '',
        [Validators.required, Validators.pattern('^[- +()0-9]{10,12}$')],
      ],
      alternateMobile: [''],
      gender: ['male', Validators.required],
      dob: [],
      age: [{ value: '', disabled: true }],
      fullAddress: [],
    });
    this.form1 = this.formBuilder.group({
      title: ['', Validators.required],
      fullName: [''],
      firstName: ['', Validators.required],
      lastName: [''],
      lastVisitDate: [''],
      ageYear: ['', Validators.required],
      ageMonth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: [
        '',
        [Validators.required, Validators.pattern('^[- +()0-9]{10,12}$')],
      ],
      alternateMobile: [''],
      gender: ['male', Validators.required],
      dob: [],
      age: [{ value: '', disabled: true }],
    });
    this.addressForm = this.formBuilder.group({
      id: [new Date('2017/12/03').valueOf(), Validators.required],
      type: ['home', Validators.required],
      shortName: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      landmark: ['', Validators.required],
      pin: ['', [Validators.required]],
      area: ['', [Validators.required]],
      city: ['', Validators.required],
      state: ['', Validators.required],
    });
  }

  ngOnInit() {}

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    this.patientDetail = this.form.value;
  }

  onReset(): void {
    this.patientDetail = null;
    this.selectedPatient = null;
    this.submitted = false;
    this.form.reset();
  }
  addCustomUser = (term: any) => ({ id: term, name: term });
  checkPatient() {
    const mob = this.form.controls['mobile'];
    this.selectedPatient = null;
    if (mob.valid) {
      this.showpatientList = true;
      this.selectedPatient =
        this.patientSourceList.filter((item) => {
          return item.mobile === this.form.value.mobile;
        })[0] || null;
      setTimeout(() => {
        this.showpatientList = false;
        this.updateFormData();
        this.calculateAge();
        this.homeCollectionData.sameAsParmanentAdd = true;
        this.prefillParmanentAdd();
      }, 1000);
    } else {
      this.showpatientList = false;
      this.homeCollectionData.selectedDeliveryAddress = null;
    }
  }
  calculateAge() {
    const dob = this.form.value.dob;
    if (dob) {
      const birthDate = new Date(dob);
      const currentDate = this.todayDate;
      let years = currentDate.getFullYear() - birthDate.getFullYear();
      let months = currentDate.getMonth() - birthDate.getMonth();
      let days = currentDate.getDate() - birthDate.getDate();

      if (days < 0) {
        months--;
        let previousMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0
        );
        days = previousMonth.getDate() + days;
      }

      if (months < 0) {
        years--;
        months = 12 + months;
      }
      this.form.patchValue({
        ageYear: years,
        ageMonth: months,
        age: `${years} years ${months} months`,
      });
      // this.item.ageYears = years;
      // this.item.ageMonths = months;
      // this.item.ageDays = days;
    }
  }
  updateFormData() {
    this.form.patchValue(this.selectedPatient);
  }
  removeTest(i: number) {
    this.testsSelected.splice(i, 1);
    this.calculateSum();
  }
  selectTest(e: any) {
    if (this.homeCollectionData.selectedTest) {
      const exittest = this.testsSelected.includes(
        this.homeCollectionData.selectedTest
      );
      !exittest &&
        this.testsSelected.push(this.homeCollectionData.selectedTest);
    }
    setTimeout(() => {
      this.homeCollectionData.selectedTest = null;
    }, 1);
    this.calculateSum();
  }
  calculateSum() {
    this.testCalculationDetail = {
      totalPrice: 0,
      haveFastTest: false,
      havePostTest: false,
    };
    this.testsSelected.forEach((element: any) => {
      this.testCalculationDetail.totalPrice += element.price;
      if (element.type === 'fasting') {
        this.testCalculationDetail.haveFastTest = true;
      }
      if (element.type === 'post') {
        this.testCalculationDetail.havePostTest = true;
      }
    });
  }

  addnewAddress() {
    this.addressForm = this.formBuilder.group({
      id: [new Date('2017/12/03').valueOf(), Validators.required],
      type: ['home', Validators.required],
      shortName: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      landmark: ['', Validators.required],
      pin: ['', [Validators.required]],
      area: ['', [Validators.required]],
      city: ['', Validators.required],
      state: ['', Validators.required],
    });
    this.editAddMode = false;
    if (
      this.homeCollectionData.selectedDeliveryAddress.shortName === 'Add New'
    ) {
      this.openAddModal.nativeElement.click();
    }
  }
  get addf(): { [key: string]: AbstractControl } {
    return this.addressForm.controls;
  }

  onAddressSubmit() {
    this.submittedAdd = true;

    if (this.addressForm.invalid) {
      return;
    }
    const newAddadded = { ...this.addressForm.value };
    if (!this.editAddMode) {
      this.deliveryAddressList.splice(-2, 1, newAddadded);
    }
    setTimeout(() => {
      this.homeCollectionData.selectedDeliveryAddress = newAddadded;
    }, 1);
    this.editAddMode = false;
  }
  onResetAddress(): void {
    setTimeout(() => {
      this.homeCollectionData.selectedDeliveryAddress = null;
    }, 1);
    this.submittedAdd = false;
    this.addressForm.reset();
  }
  editAddress() {
    this.editAddMode = true;
    this.addressForm.patchValue(
      this.homeCollectionData.selectedDeliveryAddress
    );
    this.openAddModal.nativeElement.click();
  }
  ngAfterViewInit(): void {}
  onModalClose(): void {
    // Your logic when the modal is closed
    console.log('Modal closed');
  }
  checkSlotError() {
    this.slotError = false;
    if (this.homeCollectionData.selectedSlot) {
      const fst = +this.homeCollectionData.selectedSlot.split(':')[0].trim();
      const sst = +this.homeCollectionData.selectedPostSlot
        .split(':')[0]
        .trim();
      if (fst + 2 > sst) {
        this.slotError = true;
      }
    }
  }
  actionFromSummery(e: string) {
    if (e === 'back') {
      this.changeFormMode();
    }
  }
  changeFormMode() {
    if (this.FormMode) {
      this.onSubmit();
    }
    this.FormMode = !this.FormMode;
  }
  toggleSpotBooking() {
    this.spotBookingenabled = !this.spotBookingenabled;
    if (this.spotBookingenabled) {
      this.homeCollectionData.selectedSlot = '9:00 - 9:30';
    } else {
      setTimeout(() => {
        this.homeCollectionData.selectedSlot = '';
      }, 1);
    }
  }
  prefillParmanentAdd() {
    if (this.homeCollectionData.sameAsParmanentAdd) {
      this.homeCollectionData.selectedDeliveryAddress =
        this.selectedPatient.address;
    } else {
      this.homeCollectionData.selectedDeliveryAddress = null;
    }
  }
}
