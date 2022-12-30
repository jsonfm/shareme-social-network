import { useQuery } from '@tanstack/react-query';
import { getPinsQuery } from "@/api/queries";
import { client } from "@/api/client";
import { PinGrid } from "@/components/PinGrid";
import { GridLoader } from "react-spinners";


export function Home() {
  const { isLoading: loading, error, data } = useQuery({
    queryKey: ['feed-pins'],
    queryFn: () => client.fetch(getPinsQuery)
  });


  return (
    <section className="min-h-screen p-5">
        {error && <p> {error.message} </p>} 
        {loading && <div className="min-h-[65vh] flex items-center justify-center"><GridLoader color="#EF4444" /></div>}
        {!loading && <PinGrid pins={data} />} 
    </section>
  )
}

