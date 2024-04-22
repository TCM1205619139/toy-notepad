declare namespace ToyComponent {
  enum BaseTypes {
    DEFAULT = 'default',
    PRIMARY = 'primary',
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
    INFO = 'info'
  }

  enum Sizes {
    LARGE= 'large',
    MIDDLE = 'middle',
    SMALL = 'small',
    MINI = 'mini'
  }

  export type CatalogueItem = {
    title: string,
    key: string,
    children?: CatalogueItem[],
    open?: boolean
  }

  export enum IconName {
    'add' = '&#xe664',
    'ashbin' = '&#xe665',
    'edit' = '&#xe66e',
    'folder-close' = '&#xe671',
    'file-open' = '&#xe670',
    'image-text' = '&#xe675',
    'arrow-down-filling' = '&#xe688'
  }
}
