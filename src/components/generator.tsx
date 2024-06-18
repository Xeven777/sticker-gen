"use client";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";
import { useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "./ui/skeleton";
import { DownloadIcon } from "lucide-react";
import { Input } from "./ui/input";

export default function Generator() {
  const animal = useRef<HTMLInputElement>(null);
  const color = useRef<HTMLInputElement>(null);
  const accessory = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("sxdl-lightning");
  const [imgUrl, setImgUrl] = useState("");
  const [tperformance, setPerformance] = useState(0);
  const url = process.env.NEXT_PUBLIC_URL || "";

  async function generateImage() {
    try {
      setLoading(true);
      const basePrompt =
        animal.current?.value +
        ", vivid, cheerful, friendly, bright, simple sticker in Pixar style, minimalism in" +
        color.current?.value +
        "color, with a" +
        accessory.current?.value +
        "accessory";
      // console.log(model);
      if (animal.current !== null) {
        const newUrl = url + "?prompt=" + basePrompt + "&model=" + model;
        const t1 = performance.now();
        const response = await fetch(newUrl, {
          method: "get",
        });

        if (response.ok) {
          const t2 = performance.now();
          setPerformance(t2 - t1 - 300);
          const blob = await response.blob();
          const objectUrl = URL.createObjectURL(blob);
          setImgUrl(objectUrl);
          toast.success("Image generated successfully!");
        } else {
          toast.error("An error occurred while generating the image.");
        }
      }
    } catch (error) {
      toast.error("An error occurred while generating the image.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-24 max-w-6xl mx-auto px-4 py-8 md:py-12 w-full">
      <div className="flex flex-col gap-6">
        <div className="grid gap-4">
          <h1 className="text-3xl font-bold">Sticker Generator</h1>
          <p className="text-muted-foreground">
            Generate unique stickers from text prompts.
          </p>
        </div>
        <div className="grid gap-4">
          <Label htmlFor="animal">Aura Animal</Label>
          <Input
            required
            ref={animal}
            id="animal"
            name="animal"
            placeholder="Enter a description of the image you want to generate..."
          />
        </div>
        <div className="grid gap-4">
          <Label htmlFor="color">Color</Label>
          <Input
            required
            ref={color}
            id="color"
            name="color"
            placeholder="Enter a description of the image you want to generate..."
          />
        </div>
        <div className="grid gap-4">
          <Label htmlFor="accessory">Accessory</Label>
          <Input
            required
            ref={accessory}
            id="accessory"
            name="accessory"
            placeholder="Enter a description of the image you want to generate..."
          />
        </div>

        <Button
          size="lg"
          className="w-full"
          onClick={() => generateImage()}
          disabled={loading}
        >
          Generate Sticker
        </Button>
      </div>
      <div className="flex flex-col min-h-[500px] group items-center justify-center">
        {loading ? (
          <Skeleton className="w-full h-full rounded-lg" />
        ) : (
          <div className="flex relative m-2 border shadow hover:shadow-lg hover:shadow-muted transition-all duration-500 shadow-muted aspect-square overflow-hidden rounded-lg">
            <Image
              src={
                imgUrl ||
                "https://assets.lummi.ai/assets/QmdYdZpzwN6ifyJnNHgsCGaqHutsKnPWKicxinhGwTdREG?auto=format&w=1500"
              }
              alt="Generated Image"
              width={600}
              height={600}
              className="max-w-full object-cover group-hover:scale-110 transition-all duration-700"
            />
            {imgUrl && (
              <Button
                size={"icon"}
                onClick={() => {
                  if (imgUrl) {
                    const a = document.createElement("a");
                    a.href = imgUrl;
                    a.download = "generated-image.png";
                    a.click();
                  }
                }}
                className="absolute bottom-2 right-2 backdrop-blur-md bg-white/20 hover:bg-white/30 rounded-full p-2"
              >
                <DownloadIcon />
              </Button>
            )}
          </div>
        )}

        <p>
          Time taken:{" "}
          <span className="text-primary">
            {(tperformance / 1000).toFixed(2)}
          </span>{" "}
          secs
        </p>
      </div>
    </div>
  );
}
