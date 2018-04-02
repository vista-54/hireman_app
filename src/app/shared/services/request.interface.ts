import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
export declare interface ApiService {
    errorHandler(error: HttpErrorResponse): void;
    post(url: string, data: Object): Observable<any>;
    get(url: string, data: Object): Observable<any>;
    put(url: string, data: Object): Observable<any>;
    destroy(url: string): Observable<any>;
}