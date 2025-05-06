import { Injectable, signal } from '@angular/core';
import { UsuarioDTO } from '../model/usuario.dto';

@Injectable({ providedIn: 'root' })
export class UserStateService {

  private readonly _currentUser = signal<UsuarioDTO | null>(null);
  public readonly currentUser = this._currentUser.asReadonly();

  private readonly STORAGE_KEY = 'currentUser';
  
  constructor() {
    this.loadStateFromStorage();
  }

  setCurrentUser(user: UsuarioDTO | null): void {
    this._currentUser.set(user);
    this.saveStateToStorage(user);
  }

  getCurrentUserSnapshot(): UsuarioDTO | null {
    return this._currentUser();
  }

  clearUser(): void {
    this._currentUser.set(null);
    this.clearStateFromStorage();
  }

  private saveStateToStorage(user: UsuarioDTO | null): void {
    if (user) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

  private loadStateFromStorage(): void {
    const storedUser = localStorage.getItem(this.STORAGE_KEY);
    if (storedUser) {
      try {
        this._currentUser.set(JSON.parse(storedUser));
      } catch (error) {
        console.error('Erro ao carregar estado do usuário do localStorage', error);
        this.clearStateFromStorage();
      }
    }
  }

  private clearStateFromStorage(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}