import { useSuspenseQuery } from "@tanstack/react-query";
import { Skeleton } from "./ui/skeleton";

type Data = {
  img: string;
  name: string;
  job: string;
};

export const MyCard = ({ id, time }: { id: string; time: number }) => {
  const { data } = useSuspenseQuery({
    queryKey: [id],
    queryFn: () => {
      return new Promise<Data>((reslove) => {
        setTimeout(() => {
          const data: Data = {
            img: "https://avatars.githubusercontent.com/u/1021430",
            job: "Maintains React Query",
            name: "Dominik",
          };
          reslove(data);
        }, time * 1000);
      });
    },
  });

  return (
    <>
      <div className="p-2 flex flex-col w-56 items-center rounded-lg shadow-lg m-2">
        <img src={data.img} alt="lang" className="h-48 w-48 rounded-md" />
        <p className=" text-lg font-semibold">{data.name}</p>
        <p className="">{data.job}</p>
      </div>
    </>
  );
};

export const Loading = () => {
  return (
    <>
      <div className="p-2 flex flex-col w-56 items-center rounded-lg shadow-lg m-2 space-y-2">
        <Skeleton className="h-48 w-48 rounded-md" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-3 w-32" />
      </div>
    </>
  );
};
