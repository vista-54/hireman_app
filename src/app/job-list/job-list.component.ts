import {Component, OnInit} from "@angular/core";
import {JobService} from "../shared/services/job.service";

@Component({
    selector: 'page-job-list',
    templateUrl: './job-list.component.html',
})

export class JobListComponent implements OnInit {
    public category: string;
    public list: any;
    public showSearchbar: boolean;

    constructor(private service: JobService) {
        this.category = 'all';
        this.showSearchbar = false;
    }

    ngOnInit() {
        this.getAll();
    }

    getAll() {
        this.service.get()
            .subscribe(success => {
                this.list = success['entity']['data'];
            })
    }

    showSearchBar() {
        this.showSearchbar = !this.showSearchbar;
    }


}
