import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  processing = false;
  fileData = null;
  error;

  OnFileChange(files: File[]) {
    this.processing = true;
    this.fileData = null;
    if (files.length === 0) {
      this.processing = false;
      return;
    }
    const file = files[0];
    this.readFile(file);
  }

  private readFile(file: File) {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (evt: any) => {
    // this.fileData = reader.result;
     this.fileData = evt.target.result;
     this.processing = false;
    };
    reader.onerror = evt => {
      this.error = 'Error while reading the file, please try again';
      this.processing = false;
    }
  }
}
