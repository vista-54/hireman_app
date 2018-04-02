import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders,
} from '@angular/common/http';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (typeof localStorage.token !== 'undefined') {
            const headers = new HttpHeaders()
                .set('Authorization', 'Bearer ' + localStorage.token);
            req = req.clone({headers});

        }
        return next.handle(req);
    }
}