import { Component, OnInit } from '@angular/core';
import { ServicioApiService } from '../servicios/servicio-api.service';
import { FiltrarListaCervezasPipe } from '../filtros/filtrar-lista-cervezas.pipe';

@Component({
  selector: 'app-lista-cervezas',
  templateUrl: './lista-cervezas.component.html',
  styleUrls: ['./lista-cervezas.component.css'],
  providers: [FiltrarListaCervezasPipe]
})
export class ListaCervezasComponent implements OnInit {
  cervezasDelMundo: Array<any>;
  filtro: string;
  constructor(private servicio: ServicioApiService) {
    // { nombre: '', id:'', url:'' },
    this.cervezasDelMundo = [
      { nombre: 'Heineken', id: 'eGtqKZ', url: 'https://s3.amazonaws.com/brewerydbapi/beer/eGtqKZ/upload_7HtBRP-medium.png' },
      { nombre: 'Amstel', id: 'CAkFaQ', url: 'https://s3.amazonaws.com/brewerydbapi/beer/CAkFaQ/upload_5uYBg6-medium.png' },
      { nombre: 'Mahou', id: 'Omi2cO', url: 'https://s3.amazonaws.com/brewerydbapi/beer/Omi2cO/upload_FVqsYS-medium.png' },
      { nombre: 'Estrella Damm Daura', id: 'UZkfuB', url: 'https://s3.amazonaws.com/brewerydbapi/beer/UZkfuB/upload_uBKG3a-medium.png' },
      { nombre: 'Carlsberg', id: 'z7LxGT', url: 'https://s3.amazonaws.com/brewerydbapi/beer/z7LxGT/upload_YXlnlK-medium.png' },
      { nombre: 'Guinness Draught', id: 'StkEiv', url: 'https://s3.amazonaws.com/brewerydbapi/beer/StkEiv/upload_etArOb-medium.png' },
      { nombre: 'Murphy´s Irish Stout', id: 'bR4lPu', url: 'https://s3.amazonaws.com/brewerydbapi/beer/bR4lPu/upload_8p0XCi-medium.png' },
      { nombre: 'Plain Porter', id: 'XybhPj', url: 'https://s3.amazonaws.com/brewerydbapi/beer/XybhPj/upload_tjEWo5-medium.png' },
      { nombre: 'Paulaner', id: 'L50oJn', url: 'https://s3.amazonaws.com/brewerydbapi/beer/L50oJn/upload_LY8JoD-medium.png' },
      { nombre: 'Warsteiner', id: 'Fcz43Y', url: 'https://s3.amazonaws.com/brewerydbapi/beer/Fcz43Y/upload_VKx4oD-medium.png' },
      { nombre: 'Erdinger Weißbier', id: 'zVwJPQ', url: 'https://s3.amazonaws.com/brewerydbapi/beer/zVwJPQ/upload_neVGXs-medium.png' },
      { nombre: 'Franziskaner Hefe-Weissbier Naturtrüb', id: 'ZhGbaC', url: 'https://s3.amazonaws.com/brewerydbapi/beer/ZhGbaC/upload_Gzk1gj-medium.png' },
      { nombre: 'Hefe Weissbier', id: 'nE0YCy', url: 'https://s3.amazonaws.com/brewerydbapi/beer/nE0YCy/upload_AUxqhl-medium.png' },
      { nombre: 'Beck´s', id: 'IDlepc', url: 'https://s3.amazonaws.com/brewerydbapi/beer/IDlepc/upload_3zlBuG-medium.png' },
      { nombre: 'Hitachino Nest White Ale', id: 'pcrctk', url: 'https://s3.amazonaws.com/brewerydbapi/beer/pcrctk/upload_CDXZFo-medium.png' },
      { nombre: 'Single Hop Centennial', id: 's5IAhv', url: 'https://s3.amazonaws.com/brewerydbapi/beer/s5IAhv/upload_UQlNC1-medium.png' },
      { nombre: 'Leffe Brune', id: 'AGgBSb', url: 'https://s3.amazonaws.com/brewerydbapi/beer/AGgBSb/upload_d2hAWz-medium.png' },
      { nombre: 'Chimay Première', id: 'dKvrhI', url: 'https://s3.amazonaws.com/brewerydbapi/beer/dKvrhI/upload_qtCC8F-medium.png' },
      { nombre: 'La Chouffe', id: 'LTLdF5', url: 'https://s3.amazonaws.com/brewerydbapi/beer/LTLdF5/upload_kreIEw-medium.png' },
      { nombre: 'Duvel Single', id: 'sj47m4', url: 'https://s3.amazonaws.com/brewerydbapi/beer/sj47m4/upload_rgbBNx-medium.png' },
      { nombre: 'Budweiser', id: '1P45iR', url: 'https://s3.amazonaws.com/brewerydbapi/beer/1P45iR/upload_Y13vwL-medium.png' },
      { nombre: 'Miller Lite', id: 'KJIjyd', url: 'https://s3.amazonaws.com/brewerydbapi/beer/KJIjyd/upload_c3IJel-medium.png' },
      { nombre: 'Corona Extra', id: 'ujPz4L', url: 'https://s3.amazonaws.com/brewerydbapi/beer/ujPz4L/upload_caVtLx-medium.png' },
      { nombre: 'Pale Ale', id: 'cdkpyx', url: 'https://s3.amazonaws.com/brewerydbapi/beer/cdkpyx/upload_GUIYRA-medium.png' },
      { nombre: 'Samuel Adams Boston Lager', id: 'z4k3eU', url: 'https://s3.amazonaws.com/brewerydbapi/beer/z4k3eU/upload_e8p015-medium.png' },
      { nombre: 'Yuengling Premium Beer', id: '2DdatF', url: 'https://s3.amazonaws.com/brewerydbapi/beer/2DdatF/upload_hzndMa-medium.png' },
      { nombre: 'Fat Tire', id: 'tuqTtX', url: 'https://s3.amazonaws.com/brewerydbapi/beer/tuqTtX/upload_L6CVSL-medium.png' },
      { nombre: 'Pabst Blue Ribbon', id: 'pDKyvz', url: 'https://s3.amazonaws.com/brewerydbapi/beer/pDKyvz/upload_UJqh68-medium.png' },
      { nombre: 'Coors Banquet', id: 'vJCXKD', url: 'https://s3.amazonaws.com/brewerydbapi/beer/vJCXKD/upload_E7cekQ-medium.png' },
      { nombre: 'Belgian White', id: 'dDXOEp', url: 'https://s3.amazonaws.com/brewerydbapi/beer/dDXOEp/upload_MOCbuS-medium.png' },
      { nombre: 'Jeremiah Red Ale', id: 'WAkHhu', url: 'https://s3.amazonaws.com/brewerydbapi/beer/WAkHhu/upload_45g8Df-medium.png' },
      { nombre: 'Commodore Perry', id: 'TuFFz1', url: 'https://s3.amazonaws.com/brewerydbapi/beer/TuFFz1/upload_HnwP46-medium.png' }
    ];
    this.filtro = '';
  }

  ngOnInit() {

  }

  onSolicitarCerveza(idCerveza: string) {
    this.servicio.getCerveza(idCerveza);
  }

  onPulsarBotonBorrar() {
    this.filtro = "";
  }

}
