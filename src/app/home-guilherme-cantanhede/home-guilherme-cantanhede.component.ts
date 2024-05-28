import {Component, Input, Output} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NgIf} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {
  HabilitatsGuilhermeCantanhedeComponent
} from "../habilitats-guilherme-cantanhede/habilitats-guilherme-cantanhede.component";

@Component({
  selector: 'app-home-guilherme-cantanhede',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    HttpClientModule,
    HabilitatsGuilhermeCantanhedeComponent
  ],
  templateUrl: './home-guilherme-cantanhede.component.html',
  styleUrl: './home-guilherme-cantanhede.component.css'
})

export class HomeGuilhermeCantanhedeComponent {
  attack: any
  id: any
  image = ''
  habilitats: any
  private promisePokemonAtack: any;
  protected getPokemonAtack: () => void;

  constructor(private http: HttpClient) {

    var promisePokemonAtack = new Promise((resolve, reject) => {

      var url = 'https://pokeapi.co/api/v2/pokemon/' + this.id + '/'

      this.http.get<any>(url).subscribe({
        next: (data) => {
          resolve(data)
        },
        error: (err) => {
          reject(err)
        },
        complete: () => {
        }
      })
    })

    this.getPokemonAtack = () => {

      // @ts-ignore
      this.id = document.getElementById('idPoke').value

      promisePokemonAtack.then((data: any) => {
          this.attack = data.stats[0].base_stat
          this.image = data.sprites.front_default
          this.habilitats = data.abilities
          console.log(this.attack)
        }).catch((err: any) => {
          console.log(err)}).finally(() => {
          console.log('Finalizado')
        })
    }
  }

}
