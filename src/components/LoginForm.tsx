"use client";

import { useState, useTransition } from "react";
import { useTranslations } from "next-intl";

export default function LoginForm() {
  const t = useTranslations("login");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    startTransition(() => {
      // Simulated auth: never succeeds.
      setTimeout(() => {
        setError(t("errorIncorrect"));
      }, 700);
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
    >
      {error && (
        <div
          role="alert"
          aria-live="polite"
          className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </div>
      )}

      <div>
        <label
          htmlFor="username"
          className="block text-xs uppercase tracking-[0.18em] text-steel mb-1.5"
        >
          {t("labelUsername")}
        </label>
        <input
          id="username"
          name="username"
          type="text"
          required
          autoComplete="username"
          placeholder={t("placeholderUsername")}
          className="w-full rounded-md border border-mist bg-white px-3 py-2.5 text-sm text-ink placeholder:text-steel/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-1"
        />
      </div>

      <div>
        <div className="flex items-baseline justify-between mb-1.5">
          <label
            htmlFor="password"
            className="block text-xs uppercase tracking-[0.18em] text-steel"
          >
            {t("labelPassword")}
          </label>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-xs text-cobalt hover:underline"
          >
            {t("forgotPassword")}
          </a>
        </div>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            autoComplete="current-password"
            placeholder={t("placeholderPassword")}
            className="w-full rounded-md border border-mist bg-white px-3 py-2.5 pe-11 text-sm text-ink placeholder:text-steel/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-1"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? t("hidePassword") : t("showPassword")}
            className="absolute inset-y-0 end-0 flex items-center px-3 text-steel hover:text-cobalt focus:outline-none focus-visible:text-cobalt"
          >
            {showPassword ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.58 10.58a2 2 0 002.83 2.83M9.88 5.09A10.94 10.94 0 0112 5c5 0 9.27 3.11 11 7-.49 1.1-1.18 2.13-2.04 3.04M6.61 6.61C4.6 8.02 3.07 9.86 2 12c1.73 3.89 6 7 11 7 1.7 0 3.32-.36 4.79-1.01" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm text-steel">
        <input
          type="checkbox"
          name="remember"
          className="h-4 w-4 rounded border-mist text-cobalt focus:ring-cobalt"
        />
        <span>{t("rememberMe")}</span>
      </label>

      <button
        type="submit"
        disabled={pending}
        className="w-full inline-flex items-center justify-center rounded-full bg-cobalt px-6 py-3 text-sm font-semibold text-white hover:bg-ink transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}
