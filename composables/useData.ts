export type MyData = {
  label: string;
  amount: number;
};

export const useData = () => {
  const data = useState<MyData>("data", () => ({
    label: "Default label",
    amount: 5,
  }));
  return {
    getCurrentData: () => {
      return data;
    },
    setCurrentDataLabel: (label: string) => {
      data.value.label = label;
    },
    setCurrentDataAmount: (amount: number) => {
      data.value.amount = amount;
    },
  };
};
