"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Mail, Sparkles } from "lucide-react";

export default function TeachersDayLetterApp() {
  const [isOpen, setIsOpen] = useState(false);

  const letterText = `선생님께

항상 따뜻한 마음으로 가르쳐 주시고,
제가 더 좋은 방향으로 나아갈 수 있도록 이끌어 주셔서 감사합니다.

선생님의 말씀과 격려는 제가 힘들 때마다
다시 용기를 낼 수 있게 해주는 큰 힘이 되었습니다.

단순히 지식을 배우는 것을 넘어,
어떻게 생각하고 성장해야 하는지도 배울 수 있었습니다.

스승의 날을 맞아 감사한 마음을 전합니다.
앞으로도 선생님께 배운 마음을 잊지 않고 더 성실히 성장하겠습니다.

늘 건강하시고 행복하시길 바랍니다.

감사합니다.`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        {/* 제목 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-rose-500" />
            <span className="text-sm font-medium text-rose-600">
              스승의 날 감사 편지
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-3">
            선생님께 전하는 마음
          </h1>

          <p className="text-stone-600">
            봉투를 클릭하면 감사 편지가 열립니다.
          </p>
        </motion.div>

        {/* 봉투 / 편지 */}
        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.button
                key="envelope"
                onClick={() => setIsOpen(true)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="w-full max-w-md h-64 rounded-3xl bg-white shadow-2xl flex flex-col items-center justify-center"
              >
                <Mail className="w-16 h-16 text-rose-500 mb-4" />
                <p className="text-xl font-semibold text-stone-700">
                  편지 열기
                </p>
              </motion.button>
            ) : (
              <motion.div
                key="letter"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">감사 편지</h2>
                  <Heart className="text-rose-500" />
                </div>

                <div className="whitespace-pre-line text-stone-700 leading-7">
                  {letterText}
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 bg-gray-200 rounded-xl"
                  >
                    다시 접기
                  </button>

                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 bg-rose-500 text-white rounded-xl"
                  >
                    인쇄하기
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}