import { integrations } from "@/data/integrations";
import { Card } from "./ui/Card";

export function Integrations() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {integrations.map((group) => (
        <Card key={group.group}>
          <h4 className="text-base font-semibold">{group.group}</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="rounded-full bg-background px-3 py-1 text-xs text-muted">
                {item}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
