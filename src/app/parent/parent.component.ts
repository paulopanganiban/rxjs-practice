import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { accountCodes } from '../_data/json-data';


interface ICurrency {
  name: string;
}
interface IBank {
  name: string;
  code: string
}
interface IAddDepositTable {
  accCode: string;
  accountInvestmentType: string;
  clientCode: string;
  clientAccountType: string;
  primary: string;
  secondary: string;
  depositAmount: number;
}
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  addNewDepositForm: FormGroup = {} as FormGroup;
  today: Date = new Date()
  date?: string = `${this.today.getMonth() + 1}/${this.today.getDate()}/${this.today.getFullYear()}`;
  accountCodes = accountCodes
  attachedFiles: any[] = []
  currencies: ICurrency[] = [{ name: 'PHP' }, { name: 'USD' }, { name: 'EUR' }, { name: 'GBP' }]
  banks: IBank[] = [
    { name: 'BDO Bills Payment', code: '1212' },
    { name: 'BPI Family Savings Bank', code: '1313' },
    { name: 'China Bank', code: '6969' },
  ];
  accountAccess?: {
    department: string
    position: number
    name: string
  } = {
      department: 'Maker',
      name: 'Approver',
      position: 1,
    }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm()
  }
  initializeForm() {
    this.addNewDepositForm = this.formBuilder.group({
      date: [this.date, Validators.required],
      currency: [null, Validators.required],
      depositType: [null, Validators.required],
      dfBankReferenceNumber: ['', Validators.required],


      accCode: [null],
      depositAmount: [null],
    })
  }
  onSubmitDepositForm() {
    console.log(['hehe'])
  }
}
