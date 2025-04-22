import Image from "next/image"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with logo */}
      <header className="border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <Image
            src="/images/invitation-homes-logo.svg"
            alt="Invitation Homes"
            width={180}
            height={40}
            className="h-10 w-auto"
          />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-12">
        {/* Cityscape illustration */}
        <div className="mt-6 mb-8">
          <Image
            src="/images/cityscape.svg"
            alt="Cityscape illustration"
            width={1000}
            height={150}
            className="w-full h-auto"
          />
        </div>

        {/* Welcome message */}
        <h1 className="text-4xl font-bold text-[#090949] mb-8">
          Welcome back,
          <br />
          Christopher!
        </h1>

        {/* Information cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-[#f7f7fb] rounded-lg p-6 relative">
            <div className="flex justify-end mb-4">
              <Image
                src="/images/home-setup.svg"
                alt="Home setup illustration"
                width={120}
                height={100}
                className="h-24 w-auto"
              />
            </div>
            <h2 className="text-xl font-bold text-[#090949] mb-2">Feel at home from day 1</h2>
            <p className="text-[#5c5c75] mb-4">Let's get you set up before your move-in.</p>
            <Link href="#" className="text-[#396e1f] font-medium border-b-2 border-[#396e1f] inline-block">
              Set up utilities
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f7f7fb] rounded-lg p-6 relative">
            <div className="flex justify-end mb-4">
              <Image
                src="/images/flu-season.svg"
                alt="Flu season illustration"
                width={120}
                height={100}
                className="h-24 w-auto"
              />
            </div>
            <h2 className="text-xl font-bold text-[#090949] mb-2">Ready for flu season?</h2>
            <p className="text-[#5c5c75] mb-4">We've got allergen-grade filters to help you get through the season.</p>
            <Link href="#" className="text-[#396e1f] font-medium border-b-2 border-[#396e1f] inline-block">
              See filters
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f7f7fb] rounded-lg p-6 relative">
            <div className="flex justify-end mb-4">
              <Image
                src="/images/credit-report.svg"
                alt="Credit report illustration"
                width={120}
                height={100}
                className="h-24 w-auto"
              />
            </div>
            <h2 className="text-xl font-bold text-[#090949] mb-2">You just got credit for paying your rent on time</h2>
            <p className="text-[#5c5c75] mb-4">
              We report on-time rent payments every 3 months to help boost your credit.
            </p>
            <Link href="#" className="text-[#396e1f] font-medium border-b-2 border-[#396e1f] inline-block">
              See report
            </Link>
          </div>
        </div>

        {/* Resident services section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#090949] mb-4">Resident services</h2>
          <p className="text-[#5c5c75] mb-6">Discover all your benefits by simply being a Invitation Homes resident.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Service buttons */}
            <Link href="#" className="border border-[#9696a9] rounded-lg p-4 hover:bg-[#f7f7fb] transition-colors">
              <span className="text-[#090949] font-medium">Air filter</span>
            </Link>

            <Link href="#" className="border border-[#9696a9] rounded-lg p-4 hover:bg-[#f7f7fb] transition-colors">
              <span className="text-[#090949] font-medium">Credit building</span>
            </Link>

            <Link href="#" className="border border-[#9696a9] rounded-lg p-4 hover:bg-[#f7f7fb] transition-colors">
              <span className="text-[#090949] font-medium">Identity protection</span>
            </Link>

            <Link href="#" className="border border-[#9696a9] rounded-lg p-4 hover:bg-[#f7f7fb] transition-colors">
              <span className="text-[#090949] font-medium">Pest control</span>
            </Link>

            <Link href="#" className="border border-[#9696a9] rounded-lg p-4 hover:bg-[#f7f7fb] transition-colors">
              <span className="text-[#090949] font-medium">Renter's insurance program</span>
            </Link>

            <Link href="#" className="border border-[#9696a9] rounded-lg p-4 hover:bg-[#f7f7fb] transition-colors">
              <span className="text-[#090949] font-medium">Resident rewards</span>
            </Link>

            <Link href="#" className="border border-[#9696a9] rounded-lg p-4 hover:bg-[#f7f7fb] transition-colors">
              <span className="text-[#090949] font-medium">Lawn care</span>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-[#5c5c75]">Powered by Second Nature</div>
      </main>
    </div>
  )
}
