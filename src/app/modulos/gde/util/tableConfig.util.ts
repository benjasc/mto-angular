import { Injectable } from '@angular/core';
import { EmisionUnitariaModel } from '../model/emisionUnitariaGde.model';

@Injectable()
export class TableConfigEmisionGDE {
  dtOptionsExport: any = {
    language: {
      emptyTable: 'Ningún dato disponible en esta tabla',
      info:
        'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
      infoEmpty: 'Mostrando registros del 0 al 0 de un total de 0 registros',
      infoFiltered: '(filtrado de un total de _MAX_ registros)',
      infoPostFix: '',
      lengthMenu: 'Mostrar _MENU_ registros',
      loadingRecords: 'Cargando...',
      processing: 'Procesando...',
      search: 'Buscar',
      zeroRecords: 'No se encontraron resultados',
      paginate: {
        first: 'Primero',
        last: 'Último',
        next: 'Siguiente',
        previous: 'Anterior'
      },
      aria: {
        sortAscending: ': Activar para ordenar la columna de manera ascendente',
        sortDescending:
          ': Activar para ordenar la columna de manera descendente'
      }
    },
    destroy: true,
    pagingType: 'full_numbers',
    pageLength: 10,
    dom: 'Bfrtip',
    buttons: ['csv', 'excel'],
    responsive: false,
    scrollX: true
  };

  dtOptionsWithinScrollX: any = {
    language: {
      emptyTable: 'Ningún dato disponible en esta tabla',
      info:
        'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
      infoEmpty: 'Mostrando registros del 0 al 0 de un total de 0 registros',
      infoFiltered: '(filtrado de un total de _MAX_ registros)',
      infoPostFix: '',
      lengthMenu: 'Mostrar _MENU_ registros',
      loadingRecords: 'Cargando...',
      processing: 'Procesando...',
      search: 'Buscar',
      zeroRecords: 'No se encontraron resultados',
      paginate: {
        first: 'Primero',
        last: 'Último',
        next: 'Siguiente',
        previous: 'Anterior'
      },
      aria: {
        sortAscending: ': Activar para ordenar la columna de manera ascendente',
        sortDescending:
          ': Activar para ordenar la columna de manera descendente'
      }
    },
    destroy: true,
    pagingType: 'full_numbers',
    pageLength: 10,
    dom: 'Bfrtip',
    buttons: ['csv', 'excel'],
    responsive: false,
    scrollX: false
  };

  constructor() {}
}
