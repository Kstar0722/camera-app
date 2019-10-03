import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})
export class PicturesComponent implements OnInit {
  private pictures = [
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: true },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
    { name: 'Aggolomerated', date: '2019-08-27 | 12:56:54 PM', image: '../../../../../assets/images/img01.jpg', selected: false },
  ];
  private isOpenAdvance = false;
  private isOpenModal = false;
  constructor() { }

  ngOnInit() {
  }

  toggleAdvanced()  {
    this.isOpenAdvance = !this.isOpenAdvance;
  }

  toggleModal() {
    this.isOpenModal = !this.isOpenModal;
  }
}
