import type { Metadata } from "next";
import { Button } from "@/components/ui/neon-button";

export const metadata: Metadata = {
  title: "Neon Button Demo",
  robots: { index: false },
};

export default function NeonButtonDemo() {
  return (
    <div className="dark flex min-h-dvh w-full flex-col items-center justify-center gap-8 bg-zinc-950 text-white">
      <div className="flex flex-col gap-3">
        <Button>Button</Button>
        <div className="flex flex-col gap-2">
          <Button neon={false}>normal button</Button>
        </div>
        <div className="flex flex-col gap-2">
          <Button variant={"solid"}>solid</Button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button size={"sm"}>small</Button>
        <Button size={"lg"}>large</Button>
        <Button variant={"ghost"}>ghost</Button>
      </div>
    </div>
  );
}
