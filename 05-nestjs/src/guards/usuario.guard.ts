import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class UsuarioGuard implements CanActivate {
    canActivate(context: ExecutionContext):
        //callbacks
        boolean |
        Promise<boolean> |
        Observable<boolean> {
        const request = context
            .switchToHttp()
            .getRequest();
        console.log('Request', request);
        console.log('Headers', request.headers);

        return false;
    }
}
