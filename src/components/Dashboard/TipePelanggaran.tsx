"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import { Target } from "lucide-react";

const VIOLATIONS_COLORS = [
  "#dc2626",
  "#ea580c",
  "#d97706",
  "#ca8a04",
  "#65a30d",
];

type ViolationItem = {
  type: string;
  count: number;
  percentage: number;
};

export default function TipePelanggaran({
  data,
  total,
}: {
  data: ViolationItem[];
  total: number;
}) {
  return (
    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Target className="h-5 w-5 text-orange-500" />
            Jenis Pelanggaran
          </CardTitle>
          <Badge variant="secondary">Top 5</Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {[...data]
            .sort((a, b) => b.count - a.count)
            .slice(0, 5)
            .map((violation, index) => (
              <div
                key={`${violation.type}-${index}`} // ✅ key AMAN
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: VIOLATIONS_COLORS[index] }}
                  />
                  <span className="font-medium">{violation.type}</span>
                </div>

                <div className="flex items-center space-x-3 w-40">
                  <Progress value={violation.percentage} className="h-2" />
                  <span className="text-sm font-medium w-12 text-right">
                    {violation.count}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </CardContent>

      <div className="px-6 pb-4">
        <Separator className="my-4" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Total Pelanggaran</span>
          <span className="font-medium">{total}</span>
        </div>
      </div>
    </Card>
  );
}
