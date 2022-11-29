export interface ConsultasProps {
  id: number;
  especialidade: string;
  data_consulta: Date;
  horario: Date;
  dor_cabeca: boolean;
  febre: boolean;
  nausea: boolean;
  campo_extra: string;
  status: boolean;
}
