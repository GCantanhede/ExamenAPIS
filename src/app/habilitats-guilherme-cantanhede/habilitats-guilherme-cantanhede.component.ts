import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-habilitats-guilherme-cantanhede',
  standalone: true,
  imports: [
    RouterOutlet,
    NgForOf
  ],
  templateUrl: './habilitats-guilherme-cantanhede.component.html',
  styleUrl: './habilitats-guilherme-cantanhede.component.css'
})
export class HabilitatsGuilhermeCantanhedeComponent implements OnInit {

  desc:any[] = []
  @Input() habilitats!: any;
  @Input() id!: any;


  ngOnInit(): void {
  }

  constructor(private http: HttpClient){

    let promiseHabilities = new Promise((resolve, reject) => {
      let id = 25
      this.http.get<any>('https://pokeapi.co/api/v2/ability/' + id + '/').subscribe({
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
    }

    valueResponse(data: any) {
      console.log(data)
    }
  }
