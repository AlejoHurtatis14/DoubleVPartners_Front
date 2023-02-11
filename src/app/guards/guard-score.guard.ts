import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class GuardScoreGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    let score = next.params['score'];
    if (score >= 30) {
      return true;
    }
    this.router.navigateByUrl('modulos');
    return false;
  }

}
