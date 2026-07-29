// Shared validation utilities for auth forms

export const VALIDATION = {
  name: {
    minLength: 2,
    maxLength: 100,
    pattern: /^[A-Za-z\s.'-]+$/,
  },
  contact: {
    // Indian mobile: 10 digits starting with 6-9
    mobilePattern: /^[6-9]\d{9}$/,
    // Standard email
    emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
  },
  password: {
    minLength: 8,
    maxLength: 128,
    // At least one uppercase, one lowercase, one digit, one special char
    uppercasePattern: /[A-Z]/,
    lowercasePattern: /[a-z]/,
    digitPattern: /\d/,
    specialPattern: /[!@#$%^&*(),.?":{}|<>_\-+=\[\]\\\/~`]/,
  },
};

export function validateName(name: string): string | null {
  const trimmed = name.trim();
  if (!trimmed) return "Full name is required";
  if (trimmed.length < VALIDATION.name.minLength) return "Name must be at least 2 characters";
  if (trimmed.length > VALIDATION.name.maxLength) return "Name must be under 100 characters";
  if (!VALIDATION.name.pattern.test(trimmed)) return "Name can only contain letters, spaces, and basic punctuation";
  return null;
}

export function validateContact(contact: string): string | null {
  const trimmed = contact.trim();
  if (!trimmed) return "Mobile number or email is required";

  const isMobile = VALIDATION.contact.mobilePattern.test(trimmed);
  const isEmail = VALIDATION.contact.emailPattern.test(trimmed);

  if (!isMobile && !isEmail) {
    return "Enter a valid 10-digit Indian mobile number (starting with 6-9) or a valid email address";
  }
  return null;
}

export function validatePassword(password: string): string | null {
  if (!password) return "Password is required";
  if (password.length < VALIDATION.password.minLength) return "Password must be at least 8 characters";
  if (password.length > VALIDATION.password.maxLength) return "Password must be under 128 characters";
  if (!VALIDATION.password.uppercasePattern.test(password)) return "Password must include at least one uppercase letter (A-Z)";
  if (!VALIDATION.password.lowercasePattern.test(password)) return "Password must include at least one lowercase letter (a-z)";
  if (!VALIDATION.password.digitPattern.test(password)) return "Password must include at least one digit (0-9)";
  if (!VALIDATION.password.specialPattern.test(password)) return "Password must include at least one special character (!@#$%^&* etc.)";
  return null;
}

export function getPasswordStrength(password: string): { score: number; label: string; color: string } {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (VALIDATION.password.uppercasePattern.test(password)) score++;
  if (VALIDATION.password.lowercasePattern.test(password)) score++;
  if (VALIDATION.password.digitPattern.test(password)) score++;
  if (VALIDATION.password.specialPattern.test(password)) score++;

  if (score <= 2) return { score, label: "Weak", color: "bg-red-500" };
  if (score <= 4) return { score, label: "Fair", color: "bg-amber-500" };
  if (score <= 5) return { score, label: "Strong", color: "bg-primary" };
  return { score, label: "Very Strong", color: "bg-[#FCF0DE]" };
}
