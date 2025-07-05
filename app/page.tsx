"use client"

import { useState } from "react"
import Link from "next/link"

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="min-h-screen bg-[#008080] flex items-center justify-center p-4"
      style={{
        backgroundImage: `repeating-linear-gradient(
        45deg,
        #008080,
        #008080 2px,
        #006666 2px,
        #006666 4px
      )`,
      }}
    >
      <div className="max-w-4xl w-full">
        {/* Main Window */}
        <div className="bg-[#C0C0C0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] shadow-lg">
          {/* Title Bar */}
          <div className="bg-gradient-to-r from-[#0000FF] to-[#000080] text-white px-2 py-1 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-white border border-gray-400"></div>
              <span className="font-bold text-sm">Pay-Peer-Roll v1.0</span>
            </div>
            <div className="flex space-x-1">
              <button className="w-4 h-4 bg-[#C0C0C0] border border-t-white border-l-white border-r-[#808080] border-b-[#808080] text-xs">
                _
              </button>
              <button className="w-4 h-4 bg-[#C0C0C0] border border-t-white border-l-white border-r-[#808080] border-b-[#808080] text-xs">
                □
              </button>
              <button className="w-4 h-4 bg-[#C0C0C0] border border-t-white border-l-white border-r-[#808080] border-b-[#808080] text-xs">
                ×
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Logo Section */}
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">🧻</div>
              <h1 className="text-4xl font-bold text-black mb-2" style={{ fontFamily: "MS Sans Serif, sans-serif" }}>
                PAY-PEER-ROLL
              </h1>
              <div className="bg-[#808080] h-2 w-64 mx-auto mb-4 border border-inset"></div>
              <p className="text-lg text-black">Decentralized Payroll Distribution System</p>
              <div className="flex justify-center space-x-4 mt-4 text-2xl">
                <span title="Money">💰</span>
                <span title="Payments">💳</span>
                <span title="Privacy">🔒</span>
                <span title="Blockchain">⛓️</span>
              </div>
            </div>

            {/* Login Panel */}
            <div className="max-w-md mx-auto">
              <div className="bg-[#C0C0C0] border-2 border-inset p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-[#C0C0C0] border-2 border-inset mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h2 className="text-xl font-bold text-black mb-2">System Login</h2>
                  <p className="text-sm text-black">Access Payroll Management Console</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-black mb-1">Username:</label>
                    <input
                      type="text"
                      className="w-full p-2 border-2 border-inset bg-white text-black"
                      defaultValue="admin"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-1">Password:</label>
                    <input
                      type="password"
                      className="w-full p-2 border-2 border-inset bg-white text-black"
                      defaultValue="••••••••"
                    />
                  </div>
                </div>

                <Link href="/dashboard">
                  <button
                    className={`
                      w-full py-3 px-6 font-bold text-black
                      bg-[#C0C0C0] border-2 border-outset
                      hover:bg-[#E0E0E0] active:border-inset
                      transition-all duration-100
                      ${isHovered ? "bg-[#E0E0E0]" : ""}
                    `}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    🚪 Enter System
                  </button>
                </Link>
              </div>
            </div>

            {/* Status Bar */}
            <div className="mt-8 bg-[#C0C0C0] border-2 border-inset p-2">
              <div className="flex items-center justify-between text-sm text-black">
                <div className="flex items-center space-x-4">
                  <span>🟢 Online</span>
                  <span>🔒 Secure Connection</span>
                  <span>⛓️ Blockchain Ready</span>
                </div>
                <div>Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
