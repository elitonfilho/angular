import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioAutenticado: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private http: HttpClient) { }

  usuarioEstaLogado(): boolean{
    const usuarioLogado = localStorage.getItem('usuarioLogado')
    return usuarioLogado === 'true'
  }

  fazerLogin(user: string, password: string): Observable<boolean> {
    return this.http.get(`http://localhost:3000/users?user=${user}&password=${password}`).pipe(
      map((data: any[]) => {
        if (data.length == 0) {
          return false
        }
        localStorage.setItem('usuarioLogado', JSON.stringify(true))
        this.usuarioAutenticado.emit(true)
        return true
      })
    )
  }

  sair() {
    this.usuarioAutenticado.emit(false)
    localStorage.removeItem('usuarioLogado')
  }
}
