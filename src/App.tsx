import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Loading, MyCard } from "./components/Card";
import { Suspense, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Button } from "./components/ui/button";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default function App() {
  const [show, setShow] = useState(false);

  const data = [
    { id: "1", time: 1 },
    { id: "2", time: 5 },
    { id: "3", time: 5 },
    { id: "4", time: 5 },
    { id: "5", time: 3 },
    { id: "6", time: 1 },
    { id: "7", time: 2 },
    { id: "8", time: 4 },
    { id: "9", time: 5 },
    { id: "10", time: 3 },
  ];

  return (
    <>
      <div>
        <QueryClientProvider client={queryClient}>
          <Button
            onClick={() => {
              setShow((prev) => !prev);
            }}
          >
            toggle
          </Button>
          {show && (
            <div className="grid grid-cols-4">
              {data.map((item) => (
                <Suspense fallback={<Loading />}>
                  <MyCard id={item.id} time={item.time} />
                </Suspense>
              ))}
            </div>
          )}
          <ReactQueryDevtools />
        </QueryClientProvider>
      </div>
    </>
  );
}
