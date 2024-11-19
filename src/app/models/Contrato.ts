export class Contrato {
    constructor(
      public id?: number | null,
      public identificador?: string | null,
      public valor?: number | null,
      public nombreContratante?: string | null,
      public documentoContratante?: string | null,
      public nombreContratantista?: string | null,
      public documentoContratantista?: string | null,
      public fechaInicial?: string | null,
      public fechaFinal?: string | null
    ) {}
  }
  