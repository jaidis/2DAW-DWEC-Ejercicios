import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cervezas',
  templateUrl: './lista-cervezas.component.html',
  styleUrls: ['./lista-cervezas.component.css']
})
export class ListaCervezasComponent implements OnInit {
  cervezasDelMundo: Array<Array<string>>;
  constructor() {
    this.cervezasDelMundo = [
      ['Heineken', 'eGtqKZ', 'https://s3.amazonaws.com/brewerydbapi/beer/eGtqKZ/upload_7HtBRP-large.png'],
      ['Budweiser', '1P45iR', 'https://s3.amazonaws.com/brewerydbapi/beer/1P45iR/upload_Y13vwL-large.png'],
      ['Miller Lite', 'KJIjyd', 'https://s3.amazonaws.com/brewerydbapi/beer/KJIjyd/upload_c3IJel-large.png'],
      ['Corona Extra', 'ujPz4L', 'https://s3.amazonaws.com/brewerydbapi/beer/ujPz4L/upload_caVtLx-large.png'],
      ['Paulaner', 'L50oJn', 'https://s3.amazonaws.com/brewerydbapi/beer/L50oJn/upload_LY8JoD-large.png'],
      ['Warsteiner', 'Fcz43Y', 'https://s3.amazonaws.com/brewerydbapi/beer/Fcz43Y/upload_VKx4oD-large.png'],
      ['Erdinger Weißbier', 'zVwJPQ', 'https://s3.amazonaws.com/brewerydbapi/beer/zVwJPQ/upload_neVGXs-large.png'],
      ['Beck´s', 'IDlepc', 'https://s3.amazonaws.com/brewerydbapi/beer/IDlepc/upload_3zlBuG-large.png'],
      ['Leffe Brune', 'AGgBSb', 'https://s3.amazonaws.com/brewerydbapi/beer/AGgBSb/upload_d2hAWz-large.png'],
      ['Mahou', 'Omi2cO', 'https://s3.amazonaws.com/brewerydbapi/beer/Omi2cO/upload_FVqsYS-large.png'],
      ['Amstel', 'CAkFaQ', 'https://s3.amazonaws.com/brewerydbapi/beer/CAkFaQ/upload_5uYBg6-large.png'],
      ['Carlsberg', 'z7LxGT', 'https://s3.amazonaws.com/brewerydbapi/beer/z7LxGT/upload_YXlnlK-large.png']
    ];
  }

  ngOnInit() {
  }

}
