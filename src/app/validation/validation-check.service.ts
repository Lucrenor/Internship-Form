import { Injectable } from '@angular/core';
import { ValidationService } from './validation.service';
import { form } from '../model/form';

@Injectable()
export class ValidationCheckService {
  constructor(private validationService: ValidationService) {}

  checkAgreements(formData: form): boolean {
    if (!formData.onay || !formData.kabul) {
      alert('Please accept both required agreements.');
      return false;
    }
    return true;
  }

  checkGithubUrl(github: string): boolean {
    if (!this.validationService.validateGithubUrl(github)) {
      alert('Please provide a valid GitHub URL.');
      return false;
    }
    return true;
  }

  checkLinkedinUrl(linkedin: string): boolean {
    if (!this.validationService.validateLinkedinUrl(linkedin)) {
      alert('Please provide a valid LinkedIn URL.');
      return false;
    }
    return true;
  }

  checkEmail(mail: string): boolean {
    if (!this.validationService.validateEmail(mail)) {
      alert('Please provide a valid email address.');
      return false;
    }
    return true;
  }

  checkRequiredFields(formData: form): boolean {
    if (!formData.name || !formData.mail || !formData.tel_no || !formData.uni || !formData.degree || !formData.year || !formData.start_date || !formData.cvFile || !formData.intern_type) {
      alert('Please fill all required fields.');
      return false;
    }
    return true;
  }

  checkProgrammingLanguages(progLan: any): boolean {
    const progLanSelected = Object.values(progLan).some(value => value !== null);
    if (!progLanSelected) {
      alert('Please select at least one programming language.');
      return false;
    }
    return true;
  }
}
