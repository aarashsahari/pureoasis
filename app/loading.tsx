export default function Loading() {
  return (
    <div className="border-b border-line bg-surface" aria-busy role="status">
      <span className="sr-only">Loading</span>
      <div className="mx-auto max-w-[1400px] px-5 pb-14 pt-10 sm:px-8 lg:pb-20 lg:pt-14">
        <div className="h-3 w-40 animate-pulse rounded-edge bg-surface-2" />
        <div className="mt-7 h-10 w-[min(90%,32rem)] animate-pulse rounded-edge bg-surface-2 lg:h-14" />
        <div className="mt-4 h-10 w-[min(70%,24rem)] animate-pulse rounded-edge bg-surface-2 lg:h-14" />
        <div className="mt-8 h-4 w-[min(80%,40rem)] animate-pulse rounded-edge bg-surface-2" />
        <div className="mt-3 h-4 w-[min(60%,30rem)] animate-pulse rounded-edge bg-surface-2" />
      </div>
    </div>
  );
}
