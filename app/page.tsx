"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flower2,
  Heart,
  Mail,
  Megaphone,
  X,
} from "lucide-react";

const letters = [
  {
    title: "선생님, 항상 따뜻하게 이끌어 주셔서 감사합니다.",
    writer: "조수훈",
    message: "선생님, 항상 따뜻하게 이끌어 주셔서 감사합니다.",
  },
  {
    title: "선생님의 격려 덕분에 다시 힘을 낼 수 있었습니다.",
    writer: "하정민",
    message: "선생님의 격려 덕분에 다시 힘을 낼 수 있었습니다.",
  },
  {
    title: "가르쳐 주신 마음 잊지 않고 성장하겠습니다.",
    writer: "김서희",
    message: "가르쳐 주신 마음 잊지 않고 성장하겠습니다.",
  },
  {
    title: "늘 학생들을 위해 애써 주셔서 감사합니다.",
    writer: "신소현",
    message: "늘 학생들을 위해 애써 주셔서 감사합니다.",
  },
  {
    title: "선생님 덕분에 많은 것을 배웠습니다.",
    writer: "정온유",
    message: "선생님 덕분에 많은 것을 배웠습니다.",
  },
  {
    title: "스승의 날을 맞아 진심으로 감사드립니다.",
    writer: "기묘진",
    message: "스승의 날을 맞아 진심으로 감사드립니다.",
  },
  {
    title: "선생님의 따뜻한 말씀이 큰 힘이 되었습니다.",
    writer: "최성진",
    message: "선생님의 따뜻한 말씀이 큰 힘이 되었습니다.",
  },
  {
    title: "앞으로도 선생님께 배운 것을 잊지 않겠습니다.",
    writer: "이지원",
    message: "앞으로도 선생님께 배운 것을 잊지 않겠습니다.",
  },
  {
    title: "늘 건강하시고 행복하시길 바랍니다.",
    writer: "허인회",
    message: "늘 건강하시고 행복하시길 바랍니다.",
  },
];

export default function BBWorldLabPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#f7f3ea] text-stone-800">
      {/* HEADER */}
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight">
              BB Lab
            </h1>

            <p className="text-xs text-stone-500">
              Teacher’s Day Archive
            </p>
          </div>

          <nav className="hidden gap-6 text-sm font-medium text-stone-600 md:flex">
            <a href="#notice" className="hover:text-rose-500">
              공지사항
            </a>

            <a href="#board" className="hover:text-rose-500">
              감사편지 게시판
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        {/* HERO */}
        <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative min-h-[470px] overflow-hidden rounded-[2rem] bg-white shadow-sm"
          >
            <img
              src="/teacher.png"
              alt="teacher"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="grid gap-4">

            {/* BLACK CARD */}
            <div className="rounded-3xl bg-stone-900 p-8 text-white shadow-sm flex flex-col justify-between min-h-[220px]">
              <div>
                <Flower2 className="mb-5 h-8 w-8 text-rose-200" />

                <p className="text-sm tracking-wide text-rose-200">
                  TEACHER'S DAY
                </p>

                <h3 className="mt-3 text-3xl font-black leading-tight">
                  스승의 날,
                  <br />
                  김병배 교수님 사랑합니다!!!
                </h3>
              </div>
            </div>

            {/* PINK CARD */}
            <div className="rounded-3xl bg-rose-100 p-6 shadow-sm">
              <Heart className="mb-4 h-7 w-7 text-rose-500 fill-rose-500" />

              <p className="font-bold text-2xl leading-relaxed">
                항상 건강하시길 바랍니다
              </p>

              <p className="mt-5 text-sm text-stone-600">
                - 김병배 교수님 랩실 일동 -
              </p>
            </div>
          </div>
        </section>

        {/* NOTICE */}
        <section
          id="notice"
          className="mt-10 rounded-3xl bg-white p-6 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <Megaphone className="h-5 w-5 text-rose-500" />

            <h3 className="text-xl font-black">
              공지사항
            </h3>
          </div>

          <p className="mt-3 text-sm leading-7 text-stone-600">
            스승의 날을 맞아 선생님께 전하고 싶은 감사의 마음을
            모아두었습니다.
          </p>

          <p className="text-sm leading-7 text-stone-600">
            편지 제목을 클릭하면 게시글처럼 편지를 열람할 수 있습니다.
          </p>
        </section>

        {/* BOARD */}
        <section id="board" className="mt-10">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold text-rose-500">
                BOARD
              </p>

              <h3 className="text-3xl font-black">
                감사편지 게시판
              </h3>
            </div>

            <p className="text-sm text-stone-500">
              총 {letters.length}개의 글
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

            {/* HEADER */}
            <div className="hidden md:grid grid-cols-[80px_1fr_120px_140px_90px] border-b bg-stone-50 px-6 py-4 text-sm font-bold text-stone-500">
              <span>번호</span>
              <span>제목</span>
              <span>작성자</span>
              <span>작성일</span>
              <span>조회수</span>
            </div>

            {/* POSTS */}
            {letters.map((letter, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className="grid w-full gap-2 border-b border-stone-100 px-6 py-5 text-left transition hover:bg-rose-50 md:grid-cols-[80px_1fr_120px_140px_90px]"
              >
                <span className="text-sm text-stone-400">
                  {letters.length - index}
                </span>

                <span className="font-bold text-stone-800">
                  [감사편지] {letter.title}
                </span>

                <span className="text-sm text-stone-600">
                  {letter.writer}
                </span>

                <span className="text-sm text-stone-500">
                  2026.05.15
                </span>

                <span className="text-sm text-stone-500">
                  {24 + index}
                </span>
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-stone-200 py-8 text-center text-sm text-stone-500">
        © 2026 BB Lab. Teacher’s Day Letter Archive.
      </footer>

      {/* MODAL */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.article
              className="w-full max-w-2xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
            >
              <div className="flex items-start justify-between border-b border-stone-100 p-6">
                <div>
                  <p className="mb-2 text-sm font-bold text-rose-500">
                    감사편지 게시판
                  </p>

                  <h2 className="text-2xl font-black">
                    [감사편지] {letters[selected].title}
                  </h2>

                  <p className="mt-2 text-sm text-stone-500">
                    작성자 {letters[selected].writer} · 작성일
                    2026.05.15
                  </p>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="rounded-full p-2 hover:bg-stone-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-8">
                <div className="rounded-3xl bg-[#fff8ef] p-8 leading-8 text-stone-700 shadow-inner">
                  <Mail className="mb-5 h-8 w-8 text-rose-400" />

                  <p>선생님께,</p>

                  <p className="mt-4 whitespace-pre-line">
                    {letters[selected].message}
                  </p>

                  <p className="mt-6">
                    감사한 마음을 담아,
                  </p>

                  <p className="mt-2 font-bold">
                    From. {letters[selected].writer}
                  </p>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="mt-6 w-full rounded-2xl bg-stone-900 py-3 font-bold text-white transition hover:bg-rose-500"
                >
                  목록으로 돌아가기
                </button>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}