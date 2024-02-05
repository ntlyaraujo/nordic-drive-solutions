import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="volvo_v0">
      <div className="container-lg p-16 h-full">
        <section className="flex flex-col items-center gap-16">
          {children}
        </section>
      </div>
    </main>
  );
}
