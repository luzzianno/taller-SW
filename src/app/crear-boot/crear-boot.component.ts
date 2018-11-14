import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Boot } from '../models/bot'

@Component({
  selector: 'app-crear-boot',
  templateUrl: './crear-boot.component.html',
  styleUrls: ['./crear-boot.component.css']
})
export class CrearBootComponent implements OnInit {

  public boot:Boot = {
    nombre : "",
    apellido : "",
    sex : "",
    calle: "",
    postal: 0,
    ciudad: "",
    region: "",
    pais: "",
    fechanac: "",
    tags: "",
    mensaje: "",
    acercade: "",
    image: ""
  }

  constructor() { }

  
  ngOnInit() {
  }


}
