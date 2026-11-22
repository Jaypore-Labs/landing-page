import { capabilities } from "@/data/site";
import { SectionHeader, Wrap } from "@/components/ui/primitives";

export function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-line">
      <Wrap className="py-20 md:py-28">
        <SectionHeader
          eyebrow="Capabilities"
          title="Capabilities."
          intro="Each capability has been delivered in production for healthcare, consumer technology and research organizations."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-14">
          {capabilities.map((group) => (
            <div key={group.group}>
              <h3 className="display text-[1.5rem] text-ink pb-5 border-b-[3px] border-ink">
                {group.group}
              </h3>
              <dl>
                {group.items.map((item) => (
                  <div key={item.title} className="border-b border-line py-5">
                    <dt className="text-[16px] font-medium text-ink">{item.title}</dt>
                    <dd className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{item.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
