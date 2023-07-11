import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './interface/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GetArraysAngularHttp';

  private user: any = {
      "id": 2,
      "name": "PATCH DOUBLON ID 1 Graham",
      "username": "DOUBLONID 1",
      "email": "Sincere@april.biz",
      // "address": {
      // "street": "Kulas Light",
      // "suite": "Apt. 556",
      // "city": "Gwenborough",
      // "zipcode": "92998-3874",
      // "geo": {
      // "lat": "-37.3159",
      // "lng": "81.1496"
      // }
      // },
      // "phone": "1-770-736-8031 x56442",
      // "website": "hildegard.org",
      // "company": {
      // "name": "Romaguera-CronaKLKKKKKKKK",
      // "catchPhrase": "Multi-layered client-server neural-net",
      // "bs": "harness real-time e-markets"
      // }
  }
  

  constructor(private userService: UserService) {}

  // Appelé à chaque fois que le composant est initialisé
  ngOnInit(): void {
    // this.onGetUser();
    // this.onCreateUser();
    // this.onUpdateUser();
    // this.onPatchUser();
    this.onDeleteUser();
    this.onGetUsers();
  }

  onGetUsers(): void {
    // subscribe est deprecié avec des callback arguments 
    // il est recommandé d'utiliser un objet observer unique pour gérer les notifications d'une Observable.(observer arguments)
    this.userService.getUsers().subscribe({
      next: (response: User[]) => console.table(response),
      error: (error: any) => console.log(error),
      complete: () => console.log("Liste de tous les users"),
    }    
    );
  }

  onGetUser(): void {
    // subscribe est deprecié avec des callback arguments 
    // il est recommandé d'utiliser un objet observer unique pour gérer les notifications d'une Observable.(observer arguments)
    this.userService.getUser().subscribe({
      next: (response: User) => console.log(response),
      error: (error: any) => console.log(error),
      complete: () => console.log("Affichage d'un user"),
    }    
    );
  }

  onCreateUser(): void {
    // subscribe est deprecié avec des callback arguments 
    // il est recommandé d'utiliser un objet observer unique pour gérer les notifications d'une Observable.(observer arguments)
    this.userService.createUser(this.user).subscribe({
      next: (response: User) => console.log(response),
      error: (error: any) => console.log(error),
      complete: () => console.log("Le user a été crée! "),
    }    
    );
  }

  onUpdateUser(): void {
    // subscribe est deprecié avec des callback arguments 
    // il est recommandé d'utiliser un objet observer unique pour gérer les notifications d'une Observable.(observer arguments)
    this.userService.updateUser(this.user).subscribe({
      next: (response: User) => console.log(response),
      error: (error: any) => console.log(error),
      complete: () => console.log("Le user a été modifié! "),
    }    
    );
  }

  onPatchUser(): void {
    // subscribe est deprecié avec des callback arguments 
    // il est recommandé d'utiliser un objet observer unique pour gérer les notifications d'une Observable.(observer arguments)
    this.userService.patchUser(this.user).subscribe({
      next: (response: User) => console.log(response),
      error: (error: any) => console.log(error),
      complete: () => console.log("La requet patch a reussi, le user a été modifié! "),
    }    
    );
  }

  onDeleteUser(): void {
    // subscribe est deprecié avec des callback arguments 
    // il est recommandé d'utiliser un objet observer unique pour gérer les notifications d'une Observable.(observer arguments)
    this.userService.deleteUser(5).subscribe({
      next: (response: unknown) => console.log(response),
      error: (error: any) => console.log(error),
      complete: () => console.log("Suppresion du user! "),
    }    
    );
  }
}
