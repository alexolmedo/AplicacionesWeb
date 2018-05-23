import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class UsuarioGuard implements CanActivate {
    canActivate(context: ExecutionContext):
        //callbacks
        boolean |
        Promise<boolean> |
        Observable<boolean> {

        return undefined;
    }
}
