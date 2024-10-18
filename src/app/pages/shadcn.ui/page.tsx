import GoBack from "@/components/GoBack";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ShadcnUI() {
  return (
    <div className="p-10">
      <GoBack />
      <h1 className="text-4xl font-bold text-center text-white">
        Shadcn - componentes com crtl + c e crtl + v
      </h1>
      <div className="h-screen w-screen flex justify-center items-center">
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold text-gray-700 transition-colors">
              deu bom
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-gray-700">
              Sim Sim
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold text-gray-700 transition-colors">
              ta belo
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-gray-700">
              belissimo
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold text-gray-700 transition-colors">
              é simples
            </AccordionTrigger>
            <AccordionContent className="mt-2 text-gray-700">
              bem tranquilinho
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
