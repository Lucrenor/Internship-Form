import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormService } from '../../server/form.service';
import { CommonModule} from "@angular/common";
import {ValidationService} from "../../validation/validation.service";
import { ValidationCheckService } from "../../validation/validation-check.service";
import { form } from "../../model/form";
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { FormData } from '../../model/form-data';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    RouterOutlet,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
    CheckboxModule,
    CardModule,
    ButtonModule,
    FileUploadModule,
    ButtonGroupModule,
    RadioButtonModule,
    HttpClientModule,
    CommonModule,
    NgxMaskDirective,
  ],
  providers: [FormService, ValidationService, provideNgxMask(), ValidationCheckService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formData: form = new form();

  constructor(private formService: FormService,
              protected validation: ValidationService,
              protected validationCheck: ValidationCheckService) {}

  onSubmit() {
    if (!this.validationCheck.checkAgreements(this.formData)) return;
    if (!this.validationCheck.checkGithubUrl(this.formData.github ?? '')) return;
    if (!this.validationCheck.checkLinkedinUrl(this.formData.linkedin ?? '')) return;
    if (!this.validationCheck.checkEmail(this.formData.mail)) return;
    if (!this.validationCheck.checkRequiredFields(this.formData)) return;
    if (!this.validationCheck.checkProgrammingLanguages(this.formData.prog_lan)) return;

    const formData = new FormData(this.formData);

    this.formService.submitForm(formData).subscribe(
      response => {
        console.log('Form submitted successfully', response);
        window.scrollTo(0, 0);
        window.location.reload();
      },
      error => {
        console.error('Error submitting form', error);
      }
    );
    console.log('Form submitted', this.formData);
  }
}
