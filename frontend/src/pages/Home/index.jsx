import { PinGrid } from "@/components/PinGrid";


export function Home() {
  return (
    <section className="h-screen p-5">
        <PinGrid pins={[1,2,3,4]} />
    </section>
  )
}

