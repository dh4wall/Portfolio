/**
 * Icon — maps string icon names to Lucide React icon components.
 * Only uses exports confirmed available in the installed version of lucide-react.
 */
import {
  Monitor,
  GraduationCap,
  School,
  Trophy,
  Swords,
  Star,
  Target,
  Globe,
  Zap,
  Gamepad2,
  Mail,
  MapPin,
  ExternalLink,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Link,
  AtSign,
} from "lucide-react";

const ICON_MAP = {
  monitor: Monitor,
  "graduation-cap": GraduationCap,
  school: School,
  trophy: Trophy,
  sword: Swords,
  star: Star,
  target: Target,
  globe: Globe,
  zap: Zap,
  gamepad: Gamepad2,
  linkedin: Link,       // No Linkedin in this version — using Link
  github: Code2,        // No Github in this version — using Code2
  twitter: AtSign,      // No Twitter in this version — using AtSign
  mail: Mail,
  "map-pin": MapPin,
  "external-link": ExternalLink,
  "arrow-up-right": ArrowUpRight,
  "check-circle": CheckCircle2,
};

const Icon = ({ name, size = 18, className = "", strokeWidth = 1.75, style }) => {
  const Component = ICON_MAP[name];
  if (!Component) return null;
  return (
    <Component
      size={size}
      className={className}
      strokeWidth={strokeWidth}
      style={style}
    />
  );
};

export default Icon;
