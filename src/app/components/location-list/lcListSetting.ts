export const LcSettings = {
    mode: 'external',
    hideSubHeader: true,
    noDataMessage: 'No existen datos que coincidan con la busqueda',
    pager: {
      display: false,
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      columnTitle: '',
      position: 'right',
    },
    edit: {
      editButtonContent: '<i class="bi bi-pencil"></i>',
      saveButtonContent: '<i class="bi bi-check-lg"></i>',
      cancelButtonContent: '<i class="bi bi-x-lg"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="bi bi-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'id',
        hide: true,
      },
      type: {
        title: 'Tipo',
      },
      name: {
        title: 'Nombre',
        width: '500px'
      },
      dimension: {
        title: 'Dimesion',
        width: '500px'
      },
    },
  };
  