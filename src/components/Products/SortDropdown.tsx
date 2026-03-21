export function SortDropdown() {
  return (
    <select className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-cream/80 outline-none">
      <option>Trending First</option>
      <option>Price: Low to High</option>
      <option>Newest Drops</option>
      <option>Best Rated</option>
    </select>
  );
}
