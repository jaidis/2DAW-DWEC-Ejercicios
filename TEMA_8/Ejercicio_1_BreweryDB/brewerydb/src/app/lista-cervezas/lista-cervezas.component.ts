import { Component, OnInit } from '@angular/core';
import { ServicioApiService } from '../servicios/servicio-api.service';

@Component({
  selector: 'app-lista-cervezas',
  templateUrl: './lista-cervezas.component.html',
  styleUrls: ['./lista-cervezas.component.css']
})
export class ListaCervezasComponent implements OnInit {
  cervezasDelMundo: Array<Array<string>>;
  constructor(private servicio: ServicioApiService) {
    this.cervezasDelMundo = [
      ['Heineken', 'eGtqKZ', 'https://s3.amazonaws.com/brewerydbapi/beer/eGtqKZ/upload_7HtBRP-medium.png'],
      ['Amstel', 'CAkFaQ', 'https://s3.amazonaws.com/brewerydbapi/beer/CAkFaQ/upload_5uYBg6-medium.png'],
      ['Mahou', 'Omi2cO', 'https://s3.amazonaws.com/brewerydbapi/beer/Omi2cO/upload_FVqsYS-medium.png'],
      ['Estrella Damm Daura', 'UZkfuB', 'https://s3.amazonaws.com/brewerydbapi/beer/UZkfuB/upload_uBKG3a-medium.png'],
      ['Carlsberg', 'z7LxGT', 'https://s3.amazonaws.com/brewerydbapi/beer/z7LxGT/upload_YXlnlK-medium.png'],
      ['Guinness Draught', 'StkEiv', 'https://s3.amazonaws.com/brewerydbapi/beer/StkEiv/upload_etArOb-medium.png'],
      ['Murphy´s Irish Stout', 'bR4lPu', 'https://s3.amazonaws.com/brewerydbapi/beer/bR4lPu/upload_8p0XCi-medium.png'],
      ['Plain Porter', 'XybhPj', 'https://s3.amazonaws.com/brewerydbapi/beer/XybhPj/upload_tjEWo5-medium.png'],
      ['Paulaner', 'L50oJn', 'https://s3.amazonaws.com/brewerydbapi/beer/L50oJn/upload_LY8JoD-medium.png'],
      ['Warsteiner', 'Fcz43Y', 'https://s3.amazonaws.com/brewerydbapi/beer/Fcz43Y/upload_VKx4oD-medium.png'],
      ['Erdinger Weißbier', 'zVwJPQ', 'https://s3.amazonaws.com/brewerydbapi/beer/zVwJPQ/upload_neVGXs-medium.png'],
      ['Franziskaner Hefe-Weissbier Naturtrüb', 'ZhGbaC', 'https://s3.amazonaws.com/brewerydbapi/beer/ZhGbaC/upload_Gzk1gj-medium.png'],
      ['Beck´s', 'IDlepc', 'https://s3.amazonaws.com/brewerydbapi/beer/IDlepc/upload_3zlBuG-medium.png'],
      ['Hefe Weissbier','nE0YCy','https://s3.amazonaws.com/brewerydbapi/beer/nE0YCy/upload_AUxqhl-medium.png'],
      ['Hitachino Nest White Ale','pcrctk','https://s3.amazonaws.com/brewerydbapi/beer/pcrctk/upload_CDXZFo-medium.png'],
      ['Imperial Stout','eS7K86','https://s3.amazonaws.com/brewerydbapi/beer/eS7K86/upload_GuNVW0-medium.png'],
      ['Leffe Brune', 'AGgBSb', 'https://s3.amazonaws.com/brewerydbapi/beer/AGgBSb/upload_d2hAWz-medium.png'],
      ['Chimay Première', 'dKvrhI', 'https://s3.amazonaws.com/brewerydbapi/beer/dKvrhI/upload_qtCC8F-medium.png'],
      ['La Chouffe', 'LTLdF5', 'https://s3.amazonaws.com/brewerydbapi/beer/LTLdF5/upload_kreIEw-medium.png'],
      ['Duvel Single', 'sj47m4', 'https://s3.amazonaws.com/brewerydbapi/beer/sj47m4/upload_rgbBNx-medium.png'],
      ['Budweiser', '1P45iR', 'https://s3.amazonaws.com/brewerydbapi/beer/1P45iR/upload_Y13vwL-medium.png'],
      ['Miller Lite', 'KJIjyd', 'https://s3.amazonaws.com/brewerydbapi/beer/KJIjyd/upload_c3IJel-medium.png'],
      ['Corona Extra', 'ujPz4L', 'https://s3.amazonaws.com/brewerydbapi/beer/ujPz4L/upload_caVtLx-medium.png'],
      ['Pale Ale', 'cdkpyx', 'https://s3.amazonaws.com/brewerydbapi/beer/cdkpyx/upload_GUIYRA-medium.png'],
      ['Samuel Adams Boston Lager', 'z4k3eU', 'https://s3.amazonaws.com/brewerydbapi/beer/z4k3eU/upload_e8p015-medium.png'],
      ['Yuengling Premium Beer', '2DdatF', 'https://s3.amazonaws.com/brewerydbapi/beer/2DdatF/upload_hzndMa-medium.png'],
      ['Fat Tire', 'tuqTtX', 'https://s3.amazonaws.com/brewerydbapi/beer/tuqTtX/upload_L6CVSL-medium.png'],
      ['Pabst Blue Ribbon', 'pDKyvz', 'https://s3.amazonaws.com/brewerydbapi/beer/pDKyvz/upload_UJqh68-medium.png'],
      ['Coors Banquet', 'vJCXKD', 'https://s3.amazonaws.com/brewerydbapi/beer/vJCXKD/upload_E7cekQ-medium.png'],
      ['Belgian White', 'dDXOEp', 'https://s3.amazonaws.com/brewerydbapi/beer/dDXOEp/upload_MOCbuS-medium.png'],
      ['Jeremiah Red Ale','WAkHhu','https://s3.amazonaws.com/brewerydbapi/beer/WAkHhu/upload_45g8Df-medium.png']
    ];
  }

  ngOnInit() {
  }

  onSolicitarCerveza(idCerveza: string) {
    this.servicio.getCerveza(idCerveza);
  }

}
