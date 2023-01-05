import { Component, Input, OnInit } from '@angular/core';
import {  ApexAxisChartSeries, ApexChart, ChartComponent, ApexDataLabels, ApexXAxis, ApexPlotOptions, ApexFill, ApexResponsive } from "ng-apexcharts";
import { axisLeft, axisRight, color, text } from 'd3';
import * as ApexCharts from 'apexcharts';
import { Mediasite } from 'src/app/models/mediasite';
import { KeyCard } from '../all-tab/all-tab.component';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  fill : ApexFill;
  responsive : ApexResponsive;
  title : ApexTitleSubtitle;
  legend : ApexLegend;
  grid : ApexGrid;
};

@Component({
  selector: 'app-mediasite-tab',
  templateUrl: './mediasite-tab.component.html',
  styleUrls: ['./mediasite-tab.component.css']
})
export class MediasiteTabComponent implements OnInit {
  @Input() mediaSiteList !: Mediasite[];

  keyCardLiveViews !: KeyCard;
  keyCardOnDemandViews !: KeyCard;
  keyCardTotalViews !: KeyCard;
  keyCardPresentations !: KeyCard;
  keyCardTimeSpent !: KeyCard;

  selectedAssignment = "option1";

  constructor() {  }

  ngOnInit(): void {
    this.createKeyCardObjects();
  }

  /**
   * Creates the objects passed to the Keycard component
   */
  createKeyCardObjects() {
    this.keyCardLiveViews = { metric: this.mediaSiteList[0].liveViews, label: "Live Views" };
    this.keyCardOnDemandViews = { metric: this.mediaSiteList[0].onDemandViews, label: "On Demand" };
    this.keyCardTotalViews = { metric: this.mediaSiteList[0].totalViews, label: "Total Views" };
    this.keyCardPresentations = { metric: this.mediaSiteList[0].presentationsWatched, label: "Presentations" };
    this.keyCardTimeSpent = { metric: this.mediaSiteList[0].totalViews, label: "Time Spent" };
  }
}


