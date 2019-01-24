import {UserInterface} from '../interfaces/user';

export class User implements UserInterface {
  id: number;
  nome: string;
  cognome: string;
  email: string;
  codicefiscale: string;
  provincia: string;
  tel: string;
  eta: number;

  constructor() {
    this.id = 0;
    this.nome = '';
    this.cognome = '';
    this.email = '';
    this.codicefiscale = '';
    this.provincia = '';
    this.tel = '';
    this.eta = 18;
  }
}
