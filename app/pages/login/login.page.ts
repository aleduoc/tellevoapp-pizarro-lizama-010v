import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private menuController: MenuController) { }

  usuario = {
    email: '',
    password:'',
  }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first')

  }

  Confirmar() {
    console.log('Confirmado')
    this.usuario.email='';
    this.usuario.password='';

  }

}
