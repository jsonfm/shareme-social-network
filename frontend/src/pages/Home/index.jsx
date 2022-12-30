import { useQuery } from '@tanstack/react-query';
import { getPinsQuery } from "@/api/queries";
import { client } from "@/api/client";
import { PinGrid } from "@/components/PinGrid";


export function Home() {
  const { isLoading: loading, error, data } = useQuery({
    queryKey: ['feed-pins'],
    queryFn: () => client.fetch(getPinsQuery)
  });


  return (
    <section className="min-h-screen p-5">
        {error && <p> {error.message} </p>} 
        {loading && <p>Loading</p>}
        {!loading && <PinGrid pins={data} />} 
    </section>
  )
}

