/**
 * Reusable SVG icon components for JEDY Cleaning website.
 * Replaces emoji usage with crisp, scalable vector icons.
 */

interface IconProps {
  className?: string;
  size?: number;
}

export function HomeIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 22L24 8L40 22V40C40 41.1046 39.1046 42 38 42H10C8.89543 42 8 41.1046 8 40V22Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 42V26H30V42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function SparklesIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4L27.5 17.5L40 14L30 24L40 34L27.5 30.5L24 44L20.5 30.5L8 34L18 24L8 14L20.5 17.5L24 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="38" cy="8" r="2" fill="currentColor"/>
      <circle cx="10" cy="6" r="1.5" fill="currentColor"/>
    </svg>
  );
}

export function BoxIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 16L24 6L42 16V32L24 42L6 32V16Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 16L24 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M24 42V26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M42 16L24 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 11L33 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function StarIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4L29.5 18H44L32.5 27L37 42L24 33L11 42L15.5 27L4 18H18.5L24 4Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function StarOutlineIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4L29.5 18H44L32.5 27L37 42L24 33L11 42L15.5 27L4 18H18.5L24 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function DiamondIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 44L4 20L12 6H36L44 20L24 44Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 20H44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M18 6L14 20L24 44L34 20L30 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function HandshakeIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 20L14 12L22 16L30 10L38 14L42 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 20L14 28L20 24L26 30L34 24L42 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 28L18 36L24 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34 24L30 36L24 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function LeafIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 42C16 42 8 32 8 22C8 12 18 6 28 6C38 6 42 14 42 22C42 30 34 38 24 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 42C20 34 24 28 42 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 30C26 26 30 22 36 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

export function PhoneIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.17 21.04 19.33 21 18.5 20.85C15.96 20.34 13.57 19.23 11.5 17.62C9.58 16.13 7.98 14.27 6.83 12.12C5.67 9.94 5 7.52 4.97 5.02C4.97 4.46 5.41 4 5.97 4H8.97C9.44 4 9.84 4.34 9.93 4.8C10.11 5.67 10.39 6.52 10.77 7.33L9.23 8.87C10.21 10.82 11.62 12.53 13.37 13.85L14.91 12.31C15.64 12.66 16.42 12.92 17.22 13.08C17.69 13.17 18.03 13.57 18.03 14.05L18.04 16.92H22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function MailIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function MapPinIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

export function QuoteIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 24H10C10 18 14 12 20 10L21 13C17 15 15 18 15 22H18C19.1 22 20 22.9 20 24V32C20 33.1 19.1 34 18 34H12C10.9 34 10 33.1 10 32V24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M38 24H30C30 18 34 12 40 10L41 13C37 15 35 18 35 22H38C39.1 22 40 22.9 40 24V32C40 33.1 39.1 34 38 34H32C30.9 34 30 33.1 30 32V24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function HeartIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 42S6 30 6 18C6 12 10 6 17 6C20.5 6 23 8 24 10C25 8 27.5 6 31 6C38 6 42 12 42 18C42 30 24 42 24 42Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function SpongeIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="14" width="36" height="24" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M6 26H42" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="14" cy="20" r="2" fill="currentColor"/>
      <circle cx="24" cy="20" r="2" fill="currentColor"/>
      <circle cx="34" cy="20" r="2" fill="currentColor"/>
      <circle cx="19" cy="32" r="1.5" fill="currentColor"/>
      <circle cx="29" cy="32" r="1.5" fill="currentColor"/>
      <path d="M16 14V10C16 8.9 16.9 8 18 8H30C31.1 8 32 8.9 32 10V14" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  );
}

export function CalendarIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="36" height="32" rx="4" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M6 20H42" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M16 6V14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M32 6V14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="16" cy="28" r="2" fill="currentColor"/>
      <circle cx="24" cy="28" r="2" fill="currentColor"/>
      <circle cx="32" cy="28" r="2" fill="currentColor"/>
      <circle cx="16" cy="36" r="2" fill="currentColor"/>
      <circle cx="24" cy="36" r="2" fill="currentColor"/>
    </svg>
  );
}

export function CheckIcon({ className = '', size = 20 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function MenuIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function CloseIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function ShieldIcon({ className = '', size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4L6 12V22C6 34 14 42 24 46C34 42 42 34 42 22V12L24 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 24L22 29L31 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ArrowRightIcon({ className = '', size = 20 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M11 5L16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
