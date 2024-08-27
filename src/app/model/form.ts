export class form {
  name: string = "";
  mail: string = "";
  tel_no: number | null = null;
  uni: string = "";
  degree: string = "";
  year: string = "";
  linkedin: string = "";
  github: string = "";
  cvFile?: string = "";
  start_date: string[] = [];
  intern_type: string[] = [];
  prog_lan = {
    Java: "0" ,
    Csharp: "0",
    Flutter: "0",
    Angular: "0",
    HTML: "0",
    CSS: "0",
    Bash: "0",
    SQL: "0"
  };
  onay: boolean = false;
  kabul: boolean = false;
}
