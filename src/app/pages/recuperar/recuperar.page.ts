import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  //variable:
  email: string = "";

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  recuperar(){
    if(this.usuarioService.recuperarUsuario(this.email)){
      alert("Revisa tu correo para encontrar la nueva contraseña!")
      this.router.navigate(['/login']);
    }else{
      alert("ERROR! el usuario no existe!")
    }
  }
}
