import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private ADMINS: any = [
    { email: 'senac@gmail.com', password: '123456' },
  ]

  private PARTNERS: any = [
    { email: 'daniel@gmail.com', password: '123456' },
  ]

  CanAdminLogin(email: string, password: string): boolean {
    for (let i = 0; i < this.ADMINS.length; i++) {
      if (this.ADMINS[i].email == email && this.ADMINS[i].password == password) {
        return true;
      }
    }
    return false;
  }

  CanLogin(email: string, password: string): boolean {
    for (let i = 0; i < this.ADMINS.length; i++) {
      if (this.PARTNERS[i].email == email && this.PARTNERS[i].password == password) {
        return true;
      }
    }
    return false;
  }

  Login() {
    var email = document.getElementById('typeEmailX-2') as HTMLInputElement;
    var password = document.getElementById('typePasswordX-2') as HTMLInputElement;
    console.log(email.value);
    console.log(password.value);
    console.log(this.ADMINS[0].email);
    console.log(this.ADMINS[0].password);
    if (this.CanAdminLogin(email.value, password.value)) {
      return Swal.fire(
        'Good job!',
        'Login como <strong>ADMINISTRADOR</strong> realizado com sucesso!',
        'success'
      )
    } else if (this.CanLogin(email.value, password.value)) {
      return Swal.fire(
        'Good job!',
        'Login como strong>FUNCIONÁRIO</strong> realizado com sucesso!',
        'success'
      )
    } else {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email ou senha incorretos!',
      })

    }

  }




}


