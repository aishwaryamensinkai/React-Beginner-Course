import { useQuery } from "@tanstack/react-query";
export const QueryApp = () => {
  const {
    data: catData,
    isPending,
    error,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: () =>
      fetch("https://catfact.ninja/fact")
        .then((res) => res.json())
        .then((data) => {
          return data;
        }),
  });

  if (error) {
    return <h1> Sorry, there was an error {error.message} </h1>;
  }

  if (isPending) {
    return <h1> Loading...</h1>;
  }

  return (
    <h1>
      <p>{catData?.fact}</p>
      <button onClick={refetch}> Update Data </button>
    </h1>
  );
};
