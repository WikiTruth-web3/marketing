import { LucideIcon } from 'lucide-react';

export interface CrimeDataType {
  icon: LucideIcon | any;
  label: string;
  value: string;
  description: string;
  link: string;
  color: string;
  bgColor?: string;
}
