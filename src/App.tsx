export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="flex items-center justify-between py-4 px-8 border-b">
        <div className="font-bold text-xl tracking-tight">Sena Community</div>
        <nav className="flex gap-4">
          <a href="#" className="hover:underline text-gray-700">게시판</a>
          <a href="#" className="hover:underline text-gray-700">공략</a>
          <a href="#" className="hover:underline text-blue-600 font-semibold">로그인</a>
        </nav>
      </header>

      {/* Main */}
      <main className="flex flex-col items-center flex-1 mt-12 px-4">
        {/* 검색/글쓰기 입력창 */}
        <input
          className="w-full max-w-xl px-6 py-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg shadow"
          placeholder="궁금한 점을 검색하거나 새 글을 작성하세요"
        />
        {/* 게시글 카드 목록 */}
        <div className="mt-10 grid gap-6 w-full max-w-2xl">
          {/* 게시글 카드 예시 */}
          <div className="bg-gray-50 rounded-xl shadow p-6 hover:shadow-md transition">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">[공략] 16영지 쫄작 루트</span>
              <span className="text-sm text-gray-400">2025-07-02</span>
            </div>
            <div className="mt-2 text-gray-600">최적 경험치 루트와 세팅을 정리했습니다...</div>
            <div className="flex gap-4 mt-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">추천</button>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">댓글</button>
            </div>
          </div>
          {/* 필요시 카드 여러 개 반복 */}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-4 text-center text-gray-400 text-sm border-t">
        © 2025 Sena Community
      </footer>
    </div>
  );
}
