import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { FormService } from '../form.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  submitted = false;
  productRegistrationForm: any;
  passportName: any;
  passptExtension: any;
  fileExtensionError: boolean = false;
  passportfileExtensionMessgae: string;
  nationalIdCardfileExtensionMessgae: string;
  drivingLicensefileExtensionMessgae: string;
  DocsBase64Passport: any;
  nationalIdCardName: any;
  nationalIdCardExtension: any;
  drivingLicenseName: any;
  drivingLicenseExtension: any;
  DocsBase64IdentityCard: any;
  DocsBase64DrivingLicense: any;
  idProoffileContents: any;

  constructor(private formBuilder: FormBuilder,
              private formService: FormService,
              private router: Router) { }

  ngOnInit(): void {
    this.productRegistrationForm = this.formBuilder.group({
      userName: ["", [Validators.required]],
      userEmailId: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      userPhoneNo: ["", [Validators.required]],
      userCountry: ["", [Validators.required]],
      userPassword: ["", [Validators.required]],
      userPassportDoc: [""],
      userNationalIdCardDoc: [""],
      userDrivingLicenseDoc: [""]
    });
  }

  public errorHandling = (controlName: string, errorName: string) => {
    return this.productRegistrationForm.controls[controlName].hasError(errorName);
  }
  

  // Passport docs
  passport(event) {
    let passpt: File = (event.target.files as FileList)[0];
    console.log('event : ' , passpt);
    this.passportName = passpt.name;
    this.convertTOBase64Passport(passpt);
    let allowedExtension = ["jpg", "png", "JPG", "PNG"];
    this.passptExtension = this.passportName.split('.').pop();

    let sizeallowed = 2 * 1024 * 1024;
    if(passpt.size > sizeallowed) {
      alert('file size is over than 2MB.');
    }
    if(this.isInArray(allowedExtension, this.passptExtension)) {
      this.fileExtensionError = false;
      this.passportfileExtensionMessgae = "";
    } else {
      this.passportfileExtensionMessgae = `${this.passptExtension} file not allowed`;
      this.fileExtensionError = true;
    }

    // if(passpt) {
    //   let idProofReader = new FileReader();
    //   idProofReader.onload = (e: any) => {
    //     let idProofContents = e.target.result;

    //     var dataType = idProofContents.split(';base64,')[1];
    //     console.log('base64String : ' , dataType);

    //     console.log('idProofContents : ' , idProofContents);
    //     this.idProoffileContents = idProofContents;
    //     console.log('idProoffileContents : ' , this.idProoffileContents); 
    //   }
    //   idProofReader.readAsDataURL(passpt);
    // } else {
    //   alert("failed to load file");
    // }
  }

  

// converted base64 Passport
convertTOBase64Passport(file: File) {
  const observable = new Observable((subscriber: Subscriber<any>) => {
    this.passportReadFile(file, subscriber)
  });
  
  observable.subscribe((d) => {
    console.log('d : ' , d);
    // this.DocsBase64Passport = d;
    this.DocsBase64Passport = d.split("base64,")[1];
    console.log('DocsBase64Passport : ' , this.DocsBase64Passport);
    
  })
}

passportReadFile(file: File, subscriber: Subscriber<any>) {
  const filereader = new FileReader();
  filereader.readAsDataURL(file);
  filereader.onload = () => {
    subscriber.next(filereader.result);
    subscriber.complete()
  }
  // filereader.readAsDataURL(file);

  filereader.onerror = () => {
    subscriber.error()
    subscriber.complete()
  }
}



  // identity docs
nationalIdCard(event) {
  let idCard: File = (event.target.files as FileList)[0];
  console.log('idCard : ' , idCard);
  this.nationalIdCardName = idCard.name;
  this.convertTOBase64IdentityCard(idCard);
  let allowedExtension = ["jpg", "png", "JPG", "PNG"];
  this.nationalIdCardExtension = this.nationalIdCardName.split('.').pop();

  let sizeallowed = 2 * 1024 * 1024;
  if(idCard.size > sizeallowed) {
    alert('file size is over than 2MB.');
  }

  if(this.isInArray(allowedExtension, this.nationalIdCardExtension)) {
    this.fileExtensionError = false;
    this.nationalIdCardfileExtensionMessgae = "";
  } else {
    this.nationalIdCardfileExtensionMessgae = `${this.nationalIdCardExtension} file not allowed`;
    this.fileExtensionError = true;
  }
}

// converted base64 DrivingLicense
convertTOBase64IdentityCard(file: File) {
  const observable = new Observable((subscriber: Subscriber<any>) => {
    this.identityCardReadFile(file, subscriber)
  });
  
  observable.subscribe((d) => {
    console.log('d : ' , d);
    // this.DocsBase64IdentityCard = d;

    this.DocsBase64IdentityCard = d.split("base64,")[1];
    console.log('DocsBase64IdentityCard : ' , this.DocsBase64IdentityCard);
  })
}

identityCardReadFile(file: File, subscriber: Subscriber<any>) {
  const filereader = new FileReader();
  filereader.readAsDataURL(file);
  filereader.onload = () => {
    subscriber.next(filereader.result);
    subscriber.complete()
  }
  // filereader.readAsDataURL(file);

  filereader.onerror = () => {
    subscriber.error()
    subscriber.complete()
  }
}

  // DrivingLicense Docs
  drivingLicenseDoc(event) {
    let drivingLicense: File = (event.target.files as FileList)[0];
    console.log('drivingLicense : ' , drivingLicense);
    this.drivingLicenseName = drivingLicense.name;
    this.convertTOBase64DrivingLicense(drivingLicense);
    let allowedExtension = ["jpg", "png", "JPG", "PNG"];
    this.drivingLicenseExtension = this.drivingLicenseName.split('.').pop();


    let sizeallowed = 2 * 1024 * 1024;
    if(drivingLicense.size > sizeallowed) {
      alert('file size is over than 2MB.');
    }

    if(this.isInArray(allowedExtension, this.drivingLicenseExtension)) {
      this.fileExtensionError = false;
      this.drivingLicensefileExtensionMessgae = "";
    } else {
      this.drivingLicensefileExtensionMessgae = `${this.drivingLicenseExtension} file not allowed`;
      this.fileExtensionError = true;
    }
    
  }


// converted base64 DrivingLicense
convertTOBase64DrivingLicense(file: File) {
  const observable = new Observable((subscriber: Subscriber<any>) => {
    this.drivingLicenseReadFile(file, subscriber)
  });
  
  observable.subscribe((d) => {
    console.log('d : ' , d);    
    // this.DocsBase64DrivingLicense = d;

    this.DocsBase64DrivingLicense = d.split("base64,")[1];
    console.log('DocsBase64DrivingLicense : ' , this.DocsBase64DrivingLicense);
  })
}

drivingLicenseReadFile(file: File, subscriber: Subscriber<any>) {
  const filereader = new FileReader();
  filereader.readAsDataURL(file);
  filereader.onload = () => {
    subscriber.next(filereader.result);
    subscriber.complete()
  }
  // filereader.readAsDataURL(file);

  filereader.onerror = () => {
    subscriber.error()
    subscriber.complete()
  }
}


  isInArray(array: any, word: any) {
    return array.indexOf(word.toLowerCase()) > -1;
  }



  convertTOBase64identity(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.identityreadFile(file, subscriber)
    });
    
    observable.subscribe((d) => {
      console.log('d : ' , d);
      this.DocsBase64IdentityCard = d;
    })
  }

  identityreadFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete()
    }
    // filereader.readAsDataURL(file);

    filereader.onerror = () => {
      subscriber.error()
      subscriber.complete()
    }
  }


  
  submit() {
    this.submitted = true;
    if(!this.productRegistrationForm.valid) {
      return;
    } else {
      console.log('registration form : ' , this.productRegistrationForm.value);
      let regValue = {
        userName : this.productRegistrationForm.value.userName,
        userEmailId : this.productRegistrationForm.value.userEmailId,
        userPhoneNo : this.productRegistrationForm.value.userPhoneNo,
        userCountry : this.productRegistrationForm.value.userCountry,
        userPassword : this.productRegistrationForm.value.userPassword,
        userPassportDoc: this.DocsBase64Passport ? this.DocsBase64Passport : null,
        userNationalIdCardDoc: this.DocsBase64IdentityCard ? this.DocsBase64IdentityCard : null,
        userDrivingLicenseDoc: this.DocsBase64DrivingLicense ? this.DocsBase64DrivingLicense : null
      }
      console.log('regValue : ' , regValue);
      
      this.formService.userRegistration(regValue).subscribe(data => {
        console.log('userData : ' , data);
        console.log('User registerd successfully!');        
        this.router.navigate(['form/login'], {queryParams: { registered: 'true' } });
      }, (error => {
        console.log('error : ' , error);
      }))
    }
    
  }

}





