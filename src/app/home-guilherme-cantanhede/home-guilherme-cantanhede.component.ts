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
  url: String | undefined
  id: any
  image = ''
  habilitats: any
  message: string|undefined = ''
  private promisePokemonAtack: any;
  protected getPokemonAtack: () => void;

  constructor(private http: HttpClient) {

    this.getPokemonAtack = () => {

      // @ts-ignore
      this.id = document.getElementById('idPoke').value

      this.url = 'https://pokeapi.co/api/v2/pokemon/' + this.id + '/'

      var promisePokemonAtack = new Promise((resolve, reject) => {

        // @ts-ignore
        this.http.get<any>(this.url).subscribe({
          next: (data: any) => {
            if (data.stats[0].base_stat < 50) {
              this.message = 'Promesa rebutjada! El pokemon ' + this.id + ' té menys de 50 d\'atac. Atac del Pokémon: '  + data.stats[0].base_stat
              reject(data)
            }else{
              this.message = 'Promesa aceptada! El pokemon ' + this.id + ' té más de 50 d\'atac. Atac del Pokémon: ' + data.stats[0].base_stat
              resolve(data)
            }
          },
          error: (err) => {
            reject(err)
          },
          complete: () => {
          }
        })
      })

      promisePokemonAtack.then((data: any) => {
          this.attack = data.stats[0].base_stat
          this.image = data.sprites.front_default
          this.habilitats = data.abilities
          console.log(this.attack)
        }).catch((err: any) => {
        this.attack = err.stats[0].base_stat
        this.image = err.sprites.front_default
        this.habilitats = err.abilities
        console.log(this.attack)
          console.log(err)}).finally(() => {
          console.log('Finalizado')
        })
    }
  }

}
