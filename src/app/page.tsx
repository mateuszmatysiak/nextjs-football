import { Button } from "@/components/Button";

export default function Root() {
  return (
    <>
      <section className="h-[95dvh] bg-root-hero bg-cover bg-center bg-sea-9-50 bg-blend-darken flex items-center">
        <div className="max-w-layout w-full mx-auto">
          <div className="flex flex-col gap-10 max-w-[330px]">
            <div className="flex flex-col gap-4">
              <p className="text-3xl">Make your dream team</p>
              <p className="text-base">
                Compete in the most fantastic{" "}
                <span className="text-green-4 font-bold uppercase">It</span>
                <span className="text-white font-bold uppercase">ali</span>
                <span className="text-red-4 font-bold uppercase">an</span>{" "}
                fantasy league and challenge your friends.
              </p>
            </div>
            <div className="flex gap-4">
              <Button color="primary">Build your team</Button>
              <Button color="secondary">Rules of the game</Button>
            </div>
          </div>
        </div>
      </section>

      <main className="flex flex-col max-w-layout w-full mx-auto min-h-dvh bg-sea-9">
        <div className="flex-1 mt-[-110px] rounded-lg bg-sea-5-95">Main</div>
      </main>
    </>
  );
}
