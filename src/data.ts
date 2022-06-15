export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
    type: ReportType;
  }[];
}

export const data: Data = {
  report: [
    {
      id: '6ad16790-9da1-4b1f-9c97-89747c10b36d',
      source: 'Salary',
      amount: 7500,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'af37f5fa-a207-42cb-a745-464a7171746c',
      source: 'Salary',
      amount: 2500,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: '39a1c754-4c66-48f5-b28a-298bba00e11d',
      source: 'Car',
      amount: 9000,
      createdAt: new Date(),
      updatedAt: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};
