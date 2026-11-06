/** The Noxa constellation mark: an N drawn as four linked stars, two of them gold. */
export function NoxaMark({ size = 30, ink = '#0E1530' }: { size?: number; ink?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" aria-hidden="true">
      <path d="M7 27 L7 7 L27 27 L27 7" fill="none" stroke={ink} strokeWidth="1.7" />
      <circle cx="7" cy="27" r="3.2" fill="#E8A93A" />
      <circle cx="7" cy="7" r="2.3" fill={ink} />
      <circle cx="27" cy="27" r="2.3" fill={ink} />
      <circle cx="27" cy="7" r="3.2" fill="#E8A93A" />
    </svg>
  );
}

export function NoxaLogo({ ink = '#0E1530' }: { ink?: string }) {
  return (
    <span className="flex items-center gap-2.5" style={{ color: ink }}>
      <NoxaMark ink={ink} />
      <span className="text-[22px] font-extrabold tracking-[-0.03em]">Noxa</span>
    </span>
  );
}
