import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {
  constructor() {}

  sanitizeInput(input: string): string {
    const tempDiv = document.createElement('div');
    tempDiv.textContent = input;
    return tempDiv.innerHTML;
  }

  validateNumber(event: KeyboardEvent) {
    const charCode = event.charCode;
    if (charCode !== 0 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }

  validateLetters(event: KeyboardEvent) {
    const charCode = event.charCode;
    const turkishChars = /[çÇğĞıİöÖşŞüÜ ]/;
    if (charCode !== 0 && !((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || turkishChars.test(String.fromCharCode(charCode)))) {
      event.preventDefault();
    }
  }

  validateGithubUrl(github: string): boolean {
    const sanitizedGithub = this.sanitizeInput(github);
    const regex = /^(https?:\/\/)?(www\.)?github\.com\/[A-Za-z0-9_-]+\/?$/;
    return regex.test(sanitizedGithub);
  }

  validateLinkedinUrl(linkedin: string): boolean {
    const sanitizedLinkedin = this.sanitizeInput(linkedin);
    const regex = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+\/?$/;
    return regex.test(sanitizedLinkedin);
  }

  validateEmail(mail: string): boolean {
    const sanitizedMail = this.sanitizeInput(mail);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(sanitizedMail);
  }
}
