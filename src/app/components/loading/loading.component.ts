import { Component, OnInit } from '@angular/core';
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss', './loading.component.mobile.scss']
})
export class LoadingComponent implements OnInit {

  constructor(public loading: LoadingService) { }

  ngOnInit(): void {
    this.loading.showLoading();
    setTimeout(() => {
      this.loading.hideLoading();
    }, 1500);
  }

}
