interface Style {
  position: string;
  display: string;
  width: string;
  height: string;
  padding: string;
  border: string;
  background: string;
  font: string;
  custom: string;
}

interface StyleOption extends Partial<Style> {}

export type { StyleOption };
