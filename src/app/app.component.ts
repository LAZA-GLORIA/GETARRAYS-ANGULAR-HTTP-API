import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GetArraysAngularHttp';

  constructor() {
    // Le type de données que notre abonnement ou observable 
    // va emettre
    type HttpResponse = { code: number, data: string };

    // On utilise un Observable quand on a besoin d'emttre un flux de données
    // On crée un obervable et on lui met le type de retour que l'on souhaite
    // qui est ici HttpResponse
    // On crée un abonnement avec subscriber
    // Et à chaque fois que l'abonné emet une donnée
    const observable = new Observable<HttpResponse>(subscriber => {
      console.log('DANS SUBSCRIBER ...');
      subscriber.next({ code: 200, data: 'Ici data 1 ...' });
      subscriber.next({ code: 200, data: 'Ici data 2 ...' });
      subscriber.next({ code: 200, data: 'Ici data 3 ...' });
      // subscriber.error({ code: 500, msg: 'Erreur' })
      setTimeout(() => {
        subscriber.next({ code: 200, data: 'SETTIMEOUT data 1 ...' });
        subscriber.next({ code: 200, data: 'SETTIMEOUT data avant COMPLETE ...' });
        subscriber.complete();
      }, 3*1000);
      console.log('SUBSCRIBER A FINI D\'EMETTRE...');
    });

    // Quiconque abonné à cette observable sera notifiée avec les données (next)
    // Si on ne s'inscrit pas rien ne s'affiche
    observable.subscribe({
      next(response: HttpResponse) {
        console.log('REPONSE de l\'observable: ', response);
      },
      error(error: any) {
        console.log("Une erreur s'est produite: ", error);
      },
      // Pour nettoyer les données
      complete() {
        console.log('Fini')
      }
    });
  }
}
