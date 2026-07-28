"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ReferralStatsPage() {
  const router = useRouter();
  const [stats, setStats] = useState([]);
  const [rebuiltUsers, setRebuiltUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin"); // Redirect to existing admin login
    } else {
      setIsLoggedIn(true);
      fetchStats(token);
    }
  }, [router]);

  const fetchStats = async (token) => {
    setLoading(true);
    try {
      const response = await fetch("https://baseclone-backend.vercel.app/api/admin/referral-stats", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) {
        setStats(data.stats || []);
        setRebuiltUsers(data.users || []);
      } else if (response.status === 401) {
        localStorage.removeItem("adminToken");
        router.push("/admin");
      }
    } catch (err) {
      setError("Failed to fetch referral statistics");
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-[#050508] text-white flex flex-col font-sans">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-[#050508]/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#4285f4] rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-[#4285f4]/20">
            B
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight">Referral Analytics</h2>
            <p className="text-[10px] text-white/50 uppercase tracking-[0.2em]">Advertiser Insights</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={() => window.location.href = "/admin"}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-semibold transition-all"
          >
            ← Back to Users
          </button>
          <button
            onClick={() => {
               localStorage.removeItem("adminToken");
               router.push("/admin");
            }}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-semibold transition-all text-red-400"
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">Advertiser Performance</h1>
          <p className="text-white/50">Tracking conversion rates by referral code.</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4285f4]"></div>
          </div>
        ) : error ? (
          <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-3xl text-red-400 text-center">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Stats Summary Cards */}
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">Signup Counts</h3>
              {stats.length > 0 ? (
                stats.map((s, idx) => (
                  <div key={idx} className="bg-[#0f0f14] border border-white/10 rounded-3xl p-6 flex justify-between items-center shadow-xl">
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Code</p>
                      <p className="text-lg font-bold text-[#4285f4]">{s._id || "Direct / Unknown"}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Signups</p>
                      <p className="text-3xl font-mono font-bold">{s.count}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-10 bg-[#0f0f14] border border-white/5 rounded-3xl text-center text-white/30 italic">
                  No referral data found.
                </div>
              )}
            </div>

            {/* Detailed User Table */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4 ml-2">Recent Referred Signups</h3>
              <div className="bg-[#0f0f14] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white/5 border-b border-white/10">
                        <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-widest text-white/40">Date</th>
                        <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-widest text-white/40">Email</th>
                        <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-widest text-white/40">Ref Code</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {rebuiltUsers.map((user, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                          <td className="px-6 py-4 text-xs text-white/60 font-mono">
                            {new Date(user.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium">
                            {user.email}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider ${user.referredBy ? 'bg-[#4285f4]/10 text-[#4285f4] border border-[#4285f4]/20' : 'bg-white/5 text-white/30 border border-white/5'}`}>
                              {user.referredBy || "Direct"}
                            </span>
                          </td>
                        </tr>
                      ))}
                      {rebuiltUsers.length === 0 && (
                        <tr>
                          <td colSpan={3} className="px-6 py-10 text-center text-white/30 italic">
                            No referral activity recorded yet.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}
