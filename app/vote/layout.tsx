export default function VoteLayput({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>Progress bar</div>
      {children}
    </section>
  );
}
