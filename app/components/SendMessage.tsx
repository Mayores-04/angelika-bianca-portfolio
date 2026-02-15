"use client";

import React, { FormEvent, useEffect } from "react";

export default function SendMessage({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40" onClick={onClose} />

      <div className="relative bg-white rounded-xl shadow-xl w-11/12 max-w-lg mx-auto p-6">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-black">Message Sent</h2>
        <p className="text-sm text-gray-600 mt-2">Thanks — your message was submitted. I typically respond within 24 hours. For urgent inquiries, please message me directly on social media.</p>

        <div className="mt-6">
          <p className="text-sm text-gray-700">Let's create something amazing together!</p>
          <div className="mt-6 text-right">
            <button onClick={onClose} className="px-4 py-2 bg-black text-white rounded-md">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
