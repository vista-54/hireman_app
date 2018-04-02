export declare interface Entity {
    get(): void;
    create(data: any): void;
    edit(data: any, id: number): void;
    destroy(id: number): void;
}
