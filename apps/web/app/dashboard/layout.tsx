export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-background max-w-6xl mx-auto px-2">
      {children}
    </main>
  );
}
