import Image from "next/image";

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
    return (
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative py-24 px-8 bg-gray-500 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
              <Image
                src="/opa.jpg"
                alt=""
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative lg:col-span-1">
              <Image className="h-12 w-auto" src="/logo_white.svg" alt="" width={60} height={60} />
              <blockquote className="mt-6 text-white">
                <p className="text-xl font-medium sm:text-2xl">
                  Workflow has completely transformed how we interact with customers. Weve seen record bookings, higher
                  customer satisfaction, and reduced churn.
                </p>
                <footer className="mt-6">
                  <p className="flex flex-col font-medium">
                    <span>Marie Chilvers</span>
                    <span>CEO, Workcation</span>
                  </p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    )
  }
  