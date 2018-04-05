import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs';
import {ApiService} from './request.interface';
import * as queryString from 'query-string';

@Injectable()

export class RequestService implements ApiService {


    constructor(public http: HttpClient) {

    }

    public errorHandler(error: HttpErrorResponse) {

    }


    /**
     *
     * @param url
     * @param credentials
     * @param options
     * @returns {Observable<ArrayBuffer>}
     */
    public post(url: string, credentials: any) {
        return this.http.post(url, credentials)
            .do(() => {
                },
                error => {
                    this.errorHandler(error);
                })

    }

    /**
     *
     * @param url
     * @param body
     * @returns {Observable<ArrayBuffer>}
     */
    public get(url: string, body: Object = null) {
        if (body !== null) {
            if (Object.keys(body).length > 0) {
                url += '?' + queryString.stringify(body);
            }
        }
        return this.http.get(url)
            .do(() => {
                },
                error => {
                    this.errorHandler(error);
                })
    }

    /**
     *
     * @param url
     * @param credentials
     * @param options
     * @returns {Promise<ArrayBuffer>|Promise<TResult|ArrayBuffer>}
     */
    public put(url: string, credentials: any):Observable<any> {
        return this.http.put(url, credentials)
            .do(() => {
                },
                error => {
                    this.errorHandler(error);
                })
    }

    /**
     * DELETE is reserved, I'm using destroy
     * @param url
     * @param options
     * @returns {Promise<ArrayBuffer>|Promise<TResult|ArrayBuffer>}
     */
    public destroy(url: string) {
        return this.http.delete(url)
            .do(() => {
                },
                error => {
                    this.errorHandler(error);
                })
    }
}