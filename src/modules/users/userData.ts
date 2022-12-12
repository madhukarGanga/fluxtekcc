interface User {
  id: number;
  fullName: string;
  showInterests?: boolean;
  showExpectedSalary?: boolean;
  showAvailability?: boolean;
}
export const users: User[] = [
  { id: 1, fullName: 'Dolley Epton', showAvailability: false },
  { id: 2, fullName: 'Tim Barhims' },
  { id: 3, fullName: 'Berty Lowis' },
  { id: 4, fullName: 'Chauncey Pohling', showInterests: false },
  { id: 5, fullName: 'Tynan Callow' },
  { id: 6, fullName: 'Karoline Gravy', showExpectedSalary: false },
  { id: 7, fullName: 'Shayla Gotthard' },
  { id: 8, fullName: 'Olivie Bayfield', showExpectedSalary: false, showInterests: false },
  { id: 9, fullName: 'Asia Lomas' },
  { id: 10, fullName: 'Reid Ruben', showAvailability: false },
];
