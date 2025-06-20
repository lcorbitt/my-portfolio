export default function Loading() {
  return (
    <section className="min-h-[calc(100vh-180px)] flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent"></div>
      </div>
    </section>
  );
} 