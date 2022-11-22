import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'angularExpert';

  ngOnInit(): void {
    //subscribe: estou me inscrevendo para receber os resultados"dados" da minhaObservable, como result e error.
    this.minhaObservable('if() Keidson errado').subscribe( result => console.log(result), erro => console.log(erro));

    this.minhaObservable('Keidson').subscribe({
      next: (result) => console.log('Aqui é o resultado' + result),
      error: (erro) => console.error('Aqui é o error' + erro),
      complete: () => console.info('Completo.')
    });

    const userObserver = {
      next: (result: Usuario) => console.log('Aqui é o resultado usuarioObservable: ', result),
      error: (erro: Usuario) => console.log('Aqui é o error usuarioObservable: ', erro),
      complete: () => console.log('Completo usuarioObservable')
    }

    const usuarioObs = this.usuarioObservable('Admin', 'admin@gmail.com');
    const usuarioSubs = usuarioObs.subscribe(userObserver);


    setTimeout(() => {
      usuarioSubs.unsubscribe();
    }, 2000);
  }

  minhaObservable(nome: string): Observable<string> {
    return new Observable((subscriber) => {

      if(nome === 'Keidson') {
        subscriber.next('Olá ' + nome );
        subscriber.next('Olá de novo!');

        setTimeout(() => {
          subscriber.next(nome + ' Observable não morre...')
          subscriber.complete();
        }, 4000);
      } else {
        subscriber.error('Ops! Deu erro.')
      }
    });
  };



  usuarioObservable(nome: string, email: string): Observable<Usuario> {
    return new Observable((subscriber) => {

      if(nome === 'Admin') {
        let usuario = new Usuario(nome, email);


        setTimeout(() => {
          subscriber.next(usuario);
        }, 1000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 2000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 3000);

        setTimeout(() => {
          subscriber.complete();
        }, 5000);

      } else {
        subscriber.error('Ops! Deu erro.')
      }
    });
  };


}
export class Usuario {

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }

  nome: string;
  email: string;
}
