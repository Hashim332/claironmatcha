export default function Footer() {
  return (
    <footer className='bg-white border-t border-gray-200 mt-20'>
      <div className='px-4 py-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <div className='flex justify-center items-center sm:justify-between'>
          {/* Logo/Brand */}
          <div className='text-lg font-semibold text-gray-800'>MatCla</div>

          {/* Links */}
          <div className='flex ml-8 sm:ml-0'>
            <a
              href='#leaderboard'
              className='text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 mr-6'
            >
              Leaderboard
            </a>
            <a
              href='#about'
              className='text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200'
            >
              About
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-4 text-center'>
          <p className='text-xs text-gray-500'>
            © 2025 MatCla. Made with ☕ and 🎵
          </p>
        </div>
      </div>
    </footer>
  );
}
