"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Hexagon, Lock, Mail } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Mock auth — replace with a real request to your auth endpoint.
    await new Promise((r) => setTimeout(r, 500));
    if (email && password.length >= 6) {
      document.cookie = "haxia_admin_session=mock-session; path=/; max-age=86400";
      router.push("/admin");
    } else {
      setError("Enter a valid email and a password of at least 6 characters.");
    }
    setLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-haxia-dark px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-haxia-orange/15">
            <Hexagon className="h-6 w-6 text-haxia-orange" strokeWidth={2.2} />
          </div>
          <div className="text-center">
            <p className="text-[15px] font-semibold tracking-tight text-white">Haxia Admin</p>
            <p className="text-sm text-white/60">Sign in to manage your site</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]"
        >
          <label className="mb-1.5 block text-xs font-medium text-white/60">Email</label>
          <div className="mb-4 flex items-center gap-2 rounded-lg border border-white/10 bg-haxia-dark px-3 py-2.5 focus-within:border-haxia-orange/60">
            <Mail className="h-4 w-4 text-white/50" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@haxia.tech"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
            />
          </div>

          <label className="mb-1.5 block text-xs font-medium text-white/60">Password</label>
          <div className="mb-2 flex items-center gap-2 rounded-lg border border-white/10 bg-haxia-dark px-3 py-2.5 focus-within:border-haxia-orange/60">
            <Lock className="h-4 w-4 text-white/50" />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
            />
          </div>

          {error && <p className="mb-3 text-xs text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-3 w-full rounded-lg bg-haxia-orange py-2.5 text-sm font-medium text-white transition hover:bg-haxia-hover disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-white/40">Haxia Technology internal tools</p>
      </div>
    </div>
  );
}