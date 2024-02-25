import { useQuery } from "@tanstack/react-query";

export const useGetCat = () => {
  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["cat"],
    queryFn: () =>
      fetch("https://catfact.ninja/fact")
        .then((res) => res.json())
        .then((data) => {
          return data;
        }),
  });

  const refetchData = () => {
    alert("DATA REFETCH");
    refetch();
  };

  return { data, refetchData, isLoading, error };
};
