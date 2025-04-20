export function SiteFooter() {
  return (
    <div className="relative mx-auto w-full text-sm md:px-6">
      <footer className="block py-4">
        <div className="mx-auto">
          <hr className="border-b-1 mb-4 border-gray-200" />
          <div className="flex flex-wrap items-center justify-between">
            {/* 左侧 Copyright */}
            <div className="px-4 md:w-auto">
              <a
                href="https://zhangyisui.top"
                target="_blank"
                className="text-blueGray-500 py-1 text-sm font-semibold"
                rel="noreferrer"
              >
                Copyright © {new Date().getFullYear()} ZhangYiSui
              </a>
            </div>
            {/* 右侧 Contact Me */}
            <div className="px-4 md:w-auto text-right">
              <a
                href="mailto:hechugetqiufrost@outlook.com"
                className="text-Sky-600 hover:text-Sky-700 py-1 text-sm font-semibold hover:text-blue-600"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
