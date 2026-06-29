export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center pt-12 sm:pt-16 lg:pt-20">
      <div className="container-max container-px text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-ink-200 border-t-brand-500" />
        <p className="mt-4 text-sm text-ink-400">Loading…</p>
      </div>
    </div>
  );
}
