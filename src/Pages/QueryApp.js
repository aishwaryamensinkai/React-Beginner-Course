import { useQuery } from "@tanstack/react-query";
export const QueryApp = () => {
  const { data } = useQuery(["cat"], () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        return data.fact;
      });
  });
  return <h1>{data}</h1>;
};
