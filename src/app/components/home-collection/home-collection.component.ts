import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Validation from '../../utils/validation';

@Component({
  selector: 'app-home-collection',
  templateUrl: './home-collection.component.html',
  styleUrl: './home-collection.component.scss',
})
export class HomeCollectionComponent {
  doctorList = [
    { id: 1, name: ' Guddu patel' },
    { id: 2, name: 'Anjit misra' },
    { id: 3, name: 'Rajan chaudhary' },
    { id: 4, name: 'Sagar kurmi' },
    { id: 5, name: 'Arun kumar jha' },
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
      type: 'Home',
      address1: '23 block road Delhi',
      address2: 'near hadi market opposit sbi bank block road branch',
      landmark: 'main road delhi',
      pin: 500076,
      are: '',
      city: 'Delhi',
      state: 'delhi',
    },
    {
      id: 2,
      type: 'Office',
      address1: '23 block road Delhi',
      address2: 'near hadi market opposit sbi bank block road branch',
      landmark: 'main road delhi',
      pin: 500076,
      are: '',
      city: 'Delhi',
      state: 'delhi',
    },
    {
      id: 3,
      type: 'Juhu beach',
      address1: '23 block road Delhi',
      address2: 'near hadi market opposit sbi bank block road branch',
      landmark: 'main road delhi',
      pin: 500076,
      are: '',
      city: 'Delhi',
      state: 'delhi',
    },
    {
      id: 4,
      type: 'Jublihills',
      address1: '23 block road Delhi',
      address2: 'near hadi market opposit sbi bank block road branch',
      landmark: 'main road delhi',
      pin: 500076,
      are: '',
      city: 'Delhi',
      state: 'delhi',
    },
    {
      id: 5,
      type: 'kornal place',
      address1: '23 block road Delhi',
      address2: 'near hadi market opposit sbi bank block road branch',
      landmark: 'main road delhi',
      pin: 500076,
      are: '',
      city: 'Delhi',
      state: 'delhi',
    },
    {
      id: 6,
      type: 'Infornt mumtaj hotel',
      address1: '23 block road Delhi',
      address2: 'near hadi market opposit sbi bank block road branch',
      landmark: 'main road delhi',
      pin: 500076,
      are: '',
      city: 'Delhi',
      state: 'delhi',
    },
  ];
  diagonasticCenterList = [{ id: 1, name: 'Vijaya diagonostic center' }];
  patientSourceList = [
    {
      id: 1,
      title: 'mr.',
      firstName: 'rama',
      lastName: 'patel',
      lastVisitDate: null,
      ageYear: '23',
      ageMonth: '8',
      email: 'guddu@gmail.com',
      alternateMobile: '1234123412',
      gender: 'male',
      belongTo: 'self',
    },
    {
      id: 2,
      title: 'mr.',
      firstName: 'arjun',
      lastName: 'patel',
      lastVisitDate: null,
      ageYear: '23',
      ageMonth: '8',
      email: 'guddu@gmail.com',
      alternateMobile: '1234123412',
      gender: 'male',
    },
    {
      id: 3,
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
  homeCollectionData = {
    selectedDoctor: null,
    selectedLead: null,
    isb2buser: 'false',
    selectedClient: null,
    selectedDeliveryAddress: null,
    selectedDiagonasticCenter: null,
    remarkRoute: null,
    selectedTest: null,
  };

  availableTests = [
    {
      testName: 'Fasting Plasma glucose',
      price: 120,
      precausion: 'Over night fasting',
      type: 'fasting',
      group: 'sugar',
    },
    {
      testName: 'Post lunch glucose',
      price: 120,
      precausion:
        'Sample must be give after 2 hr. from the consumption of lunch',
      type: 'post',
      group: 'sugar',
    },
    {
      testName: 'Blood count',
      price: 120,
      precausion: 'Over night fasting',
      type: 'Normal',
      group: 'sugar',
    },
    {
      testName: 'Thyroid function tests',
      price: 120,
      precausion: 'Over night fasting',
      type: 'Normal',
      group: 'sugar',
    },
    {
      testName: 'Positron emission tomography',
      price: 120,
      precausion: 'Over night fasting',
      type: 'Normal',
      group: 'sugar',
    },
    {
      testName: 'Colonoscopy',
      price: 120,
      precausion: 'Over night fasting',
      type: 'Normal',
      group: 'sugar',
    },
    {
      testName: 'Amniocentesis',
      price: 120,
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
  selectedPatient: any;
  form: FormGroup;
  submitted = false;
  showpatientList = false;
  patientDetail: any;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
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
    });
  }

  ngOnInit(): void {}

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
    debugger;
    if (mob.valid) {
      this.showpatientList = true;
    } else {
      this.showpatientList = false;
    }
  }
  updateFormData() {
    this.form.patchValue(this.selectedPatient);
  }
  removeTest(i: number) {
    this.testsSelected.splice(i, 1);
  }
  selectTest(e: any) {
    debugger;
    if (this.homeCollectionData.selectedTest) {
      const exittest = this.testsSelected.includes(
        this.homeCollectionData.selectedTest
      );
      debugger;
      !exittest &&
        this.testsSelected.push(this.homeCollectionData.selectedTest);
    }
    setTimeout(() => {
      this.homeCollectionData.selectedTest = null;
    }, 1);
  }
}
