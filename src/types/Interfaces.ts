export interface Tool {
  name: string;
  active: boolean;
}

export interface Item {
  id: number;
  label: string;
  probability: number;
  enabled: boolean;
}

export interface DieType {
  id: number;
  value: number;
}
