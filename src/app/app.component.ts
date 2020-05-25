import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'file-upload-angular-demo';
  fileUploadUrl = 'https://localhost:44381/fileupload'
  employee: EmployeeAC = new EmployeeAC();
  resumes;

  constructor(private http: HttpClient) {

  }

  fileChange(event) {
    this.resumes = event.target.files;
  }

  uploadFile1() {
    let url = `${this.fileUploadUrl}/1`;

    var formData = new FormData();
    formData.append("file", this.resumes[0]);

    this.http.post(url, formData).subscribe(() => {
      console.log('done');
    })
  }

  uploadFile2() {
    let url = `${this.fileUploadUrl}/2`;

    var formData = new FormData();
    formData.append("file", this.resumes[0]);

    this.http.post(url, formData).subscribe(() => {
      console.log('done');
    })
  }

  uploadFile3() {
    let url = `${this.fileUploadUrl}/3`;

    var formData = new FormData();

    for (var i = 0; i < this.resumes.length; i++) {
      formData.append("files", this.resumes[i]);
    }

    this.http.post(url, formData).subscribe(() => {
      console.log('done');
    })
  }

  uploadFile4() {
    let url = `${this.fileUploadUrl}/4`;

    var formData = this.objectToFormData(this.employee);

    formData.append('resume', this.resumes[0]);

    this.http.post(url, formData).subscribe(() => {
      console.log('done');
    })
  }

  uploadFile5() {
    let url = `${this.fileUploadUrl}/5`;

    var formData = this.objectToFormData(this.employee);

    for (var i = 0; i < this.resumes.length; i++) {
      formData.append("resumes", this.resumes[i]);
    }

    this.http.post(url, formData).subscribe(() => {
      console.log('done');
    })
  }

  private objectToFormData(object) {
    var formData = new FormData();

    for (var key in object) {
      formData.append(key, object[key]);
    }

    return formData;
  }
}

export class EmployeeAC {
  name: string;
}

export class EmployeeWithMultipleResumeAC {
  name: string;
}
