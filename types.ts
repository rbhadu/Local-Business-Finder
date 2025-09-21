export interface Place {
  name: string;
  address: string;
  website?: string;
  email?: string;
  facebook?: string;
  instagram?: string;
}

export type Results = Record<string, Place[]>;
