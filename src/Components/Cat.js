import { useGetCat } from "./useGetCat";

export const Cat = () => {
  const { data, refetchData, isLoading, error } = useGetCat();

  if (isLoading) {
    return <h1>Loading Data...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="App">
      <button onClick={refetchData}>Refetch</button>
      <h1>{data?.fact}</h1>
    </div>
  );
};
